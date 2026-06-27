export default function Footer() {
    return (
      <footer className="bg-gray-950 border-t border-yellow-600 mt-16 py-10 px-4">
        <div className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
  
          {/* Branding */}
          <div>
            <h4 className="text-yellow-400 font-bold text-base mb-2 uppercase tracking-wider">CineVault</h4>
            <p className="text-gray-400 leading-relaxed">
              A personal movie tracking app built with React & Tailwind CSS.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-bold text-base mb-2 uppercase tracking-wider">Follow Us</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  🎵 TikTok
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  📸 Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  🐦 X (Twitter)
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="text-yellow-400 font-bold text-base mb-2 uppercase tracking-wider">Contact Us</h4>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>📞 <span>0715902970</span></li>
              <li>
                📧{" "}
                <a href="mailto:abigaelmwangi534@gmail.com"
                  className="hover:text-yellow-400 transition-colors duration-200 break-all">
                  abigaelmwangi534@gmail.com
                </a>
              </li>
            </ul>
          </div>
  
        </div>
  
        {/* Bottom bar */}
        <div className="max-w-xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} CineVault ·
        </div>
      </footer>
    );
  }
  