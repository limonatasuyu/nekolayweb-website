import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-black bg-gray-100 mt-16 py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">NeKolayWeb</h3>
        </div>

        <div>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">İletişim</h4>
          <ul className="space-y-2 text-gray-600">
            <li>info@nekolayweb.com</li>
            <li>+90 (555) 123 45 67</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Sosyal Medya</h4>
          <div className="flex space-x-4">
            <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
              Instagram
            </Link>
            <Link href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} NeKolayWeb. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
