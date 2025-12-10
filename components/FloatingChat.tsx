import React, { useState, useRef, useEffect } from 'react';

// Tipe data untuk pesan chat
interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // State untuk menyimpan riwayat chat
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! How can we help you smile today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  // Auto-scroll ke pesan terbawah
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages, isTyping]);

  const sendToN8n = async () => {
    if (!inputValue.trim()) return;

    // 1. Tambahkan pesan user ke UI langsung
    const userMsg: ChatMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue(''); // Kosongkan input
    setIsTyping(true); // Tampilkan loading indicator

    try {
      // --- KONFIGURASI URL ---
      // PENTING: Saat live nanti, hapus "-test" dari URL agar stabil.
      // Saat ini: https://molabbies.app.n8n.cloud/webhook-test/...
      // Live nanti: https://molabbies.app.n8n.cloud/webhook/...
      // const WEBHOOK_URL = import.meta.env.VITE_N8N_API_KEY;
      const WEBHOOK_URL = "https://molabbies.app.n8n.cloud/webhook/a2a529f2-3b53-47bd-be0f-cddcd6850718";

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          timestamp: new Date().toISOString(),
          source: 'Lumina Website Chat'
        }),
      });

      if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);

      // --- PERBAIKAN UTAMA: LOGIKA PARSING PENERIMAAN PESAN ---

      // 1. Ambil respon mentah sebagai TEXT dulu (bukan langsung .json())
      const textData = await response.text();
      let botResponseText = "";

      try {
        // 2. Coba paksa ubah jadi JSON
        const jsonData = JSON.parse(textData);

        // 3. Jika berhasil jadi JSON, cari property yang sesuai
        // (Mendukung format: {output: ".."} atau {message: "..."} atau {text: "..."})
        botResponseText = jsonData.output || jsonData.message || jsonData.text || JSON.stringify(jsonData);
      } catch (e) {
        // 4. JIKA ERROR (seperti "Unexpected token H..."), berarti responnya TEKS BIASA.
        // Langsung pakai teks mentahnya!
        botResponseText = textData;
      }

      // Pastikan tidak menampilkan string kosong
      if (!botResponseText) botResponseText = "Received empty response.";

      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error('Error sending message:', error);
      // Tampilkan pesan error ke user jika gagal koneksi
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-coffee rotate-90' : 'bg-mocca animate-pulse'
          }`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-cream text-2xl`}></i>
      </button>

      {/* Chat Modal */}
      <div
        className={`fixed bottom-28 right-8 z-40 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right border border-beige/30 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="bg-coffee p-4 text-cream">
          <h5 className="font-playfair font-bold">Molarbbies Assistant</h5>
          <p className="text-xs text-cream/70">Powered by AI</p>
        </div>

        {/* Chat Area */}
        <div className="flex flex-col h-80 bg-cream/30">

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 text-sm shadow-sm ${msg.sender === 'user'
                    ? 'bg-mocca text-white rounded-tl-xl rounded-tr-xl rounded-bl-xl'
                    : 'bg-white text-coffee/80 rounded-tr-xl rounded-br-xl rounded-bl-xl'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm text-coffee/50 text-xs italic">
                  <i className="fa-solid fa-ellipsis fa-bounce"></i> Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
              placeholder="Type your question..."
              className="w-full bg-gray-50 border border-beige/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-mocca pr-10"
              onKeyPress={(e) => e.key === 'Enter' && sendToN8n()}
            />
            <button
              onClick={sendToN8n}
              disabled={isTyping || !inputValue.trim()}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-mocca hover:text-coffee disabled:text-gray-300 transition-colors"
            >
              {isTyping ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                <i className="fa-solid fa-paper-plane"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingChat;