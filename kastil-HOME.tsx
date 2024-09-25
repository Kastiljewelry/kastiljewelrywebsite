import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Diamond, ShoppingBag, Search, ChevronDown, Facebook, Instagram, Twitter, Globe, Check, ArrowLeftRight, ShoppingCart, CreditCard, Truck, Phone, Camera, Scale, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const translations = {
  en: {
    collections: "Collections",
    diamonds: "Diamonds",
    bespoke: "Bespoke",
    about: "About",
    exploreCollections: "Explore Collections",
    timelessElegance: "Timeless Elegance by Kastil",
    discoverCollection: "Discover our exquisite collection of fine jewelry",
    ourCollections: "Our Collections",
    kastilLegacy: "The Kastil Legacy",
    legacyDescription: "For over a century, Kastil has been crafting the world's finest jewelry. Our commitment to quality, innovation, and timeless design has made us the preferred choice for discerning clients worldwide.",
    discoverStory: "Discover Our Story",
    howToOrder: "How to Order from Kastil",
    pickJewelry: "Pick Your Jewelry",
    pickJewelryDesc: "Check out our collection on Instagram or WhatsApp.",
    messageUs: "Message Us",
    messageUsDesc: "Send a WhatsApp to [your number] or DM us on Instagram (@KastilJewelry) with the item you want.",
    payment: "Payment",
    paymentDesc: "We'll confirm the price and stock. Pay via [Bank Transfer/GOPAY/OVO].",
    shipping: "Shipping",
    shippingDesc: "Once payment is confirmed, we'll ship your order and send you a tracking number.",
    howToBuyback: "How to Buyback from Kastil",
    contactUs: "Contact Us",
    contactUsDesc: "Send us a WhatsApp message at [your number] or DM us on Instagram @KastilJewelry.",
    shareProductDetails: "Share Product Details",
    shareProductDetailsDesc: "Send clear photos and details of the jewelry you want to sell back.",
    itemEvaluation: "Item Evaluation",
    itemEvaluationDesc: "We'll evaluate the condition and provide a buyback price offer.",
    confirmAndGetPaid: "Confirm & Get Paid",
    confirmAndGetPaidDesc: "If you agree with the offer, we'll process your payment via [Bank Transfer/GOPAY/OVO].",
    stayInformed: "Stay Informed",
    newsletterDescription: "Subscribe to our newsletter for exclusive Kastil offers and the latest in luxury jewelry.",
    subscribe: "Subscribe",
    customerCare: "Customer Care",
    shippingReturns: "Shipping & Returns",
    aboutKastil: "About Kastil",
    ourStory: "Our Story",
    craftsmanship: "Craftsmanship",
    sustainability: "Sustainability",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    connectWithUs: "Connect With Us",
    allRightsReserved: "All rights reserved.",
    necklaces: "Necklaces",
    rings: "Rings",
    earrings: "Earrings",
    bracelets: "Bracelets",
    pendants: "Pendants",
    karat24: "24 Karat",
  },
  id: {
    collections: "Koleksi",
    diamonds: "Berlian",
    bespoke: "Kustom",
    about: "Tentang",
    exploreCollections: "Jelajahi Koleksi",
    timelessElegance: "Keanggunan Abadi oleh Kastil",
    discoverCollection: "Temukan koleksi perhiasan mewah kami",
    ourCollections: "Koleksi Kami",
    kastilLegacy: "Warisan Kastil",
    legacyDescription: "Selama lebih dari satu abad, Kastil telah membuat perhiasan terbaik di dunia. Komitmen kami terhadap kualitas, inovasi, dan desain abadi telah menjadikan kami pilihan utama bagi klien yang cermat di seluruh dunia.",
    discoverStory: "Temukan Cerita Kami",
    howToOrder: "Cara Memesan dari Kastil",
    pickJewelry: "Pilih Perhiasan Anda",
    pickJewelryDesc: "Lihat koleksi kami di Instagram atau WhatsApp.",
    messageUs: "Hubungi Kami",
    messageUsDesc: "Kirim WhatsApp ke [nomor Anda] atau DM kami di Instagram (@KastilJewelry) dengan item yang Anda inginkan.",
    payment: "Pembayaran",
    paymentDesc: "Kami akan mengkonfirmasi harga dan stok. Bayar melalui [Transfer Bank/GOPAY/OVO].",
    shipping: "Pengiriman",
    shippingDesc: "Setelah pembayaran dikonfirmasi, kami akan mengirimkan pesanan Anda dan mengirimkan nomor pelacakan.",
    howToBuyback: "Cara Buyback dari Kastil",
    contactUs: "Hubungi Kami",
    contactUsDesc: "Kirim pesan WhatsApp ke [nomor Anda] atau DM kami di Instagram @KastilJewelry.",
    shareProductDetails: "Bagikan Detail Produk",
    shareProductDetailsDesc: "Kirim foto yang jelas dan detail perhiasan yang ingin Anda jual kembali.",
    itemEvaluation: "Evaluasi Barang",
    itemEvaluationDesc: "Kami akan mengevaluasi kondisi dan memberikan penawaran harga buyback.",
    confirmAndGetPaid: "Konfirmasi & Terima Pembayaran",
    confirmAndGetPaidDesc: "Jika Anda setuju dengan penawaran, kami akan memproses pembayaran Anda melalui [Transfer Bank/GOPAY/OVO].",
    stayInformed: "Tetap Terinformasi",
    newsletterDescription: "Berlangganan newsletter kami untuk penawaran eksklusif Kastil dan informasi terbaru tentang perhiasan mewah.",
    subscribe: "Berlangganan",
    customerCare: "Layanan Pelanggan",
    shippingReturns: "Pengiriman & Pengembalian",
    aboutKastil: "Tentang Kastil",
    ourStory: "Cerita Kami",
    craftsmanship: "Keahlian",
    sustainability: "Keberlanjutan",
    legal: "Hukum",
    privacyPolicy: "Kebijakan Privasi",
    termsOfService: "Syarat Layanan",
    connectWithUs: "Terhubung Dengan Kami",
    allRightsReserved: "Hak Cipta Dilindungi.",
    necklaces: "Kalung",
    rings: "Cincin",
    earrings: "Anting",
    bracelets: "Gelang",
    pendants: "Liontin",
    karat24: "24 Karat",
  }
}

export default function KastilHome() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('id')
  const t = translations[language]

  const collections = [
    { en: "Necklaces", id: "Kalung" },
    { en: "Rings", id: "Cincin" },
    { en: "Earrings", id: "Anting" },
    { en: "Bracelets", id: "Gelang" },
    { en: "Pendants", id: "Liontin" },
    { en: "24 Karat", id: "24 Karat" }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-4 px-6 flex items-center justify-between border-b border-gray-800">
        <Link href="/" className="flex items-center space-x-2">
          <Diamond className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-semibold">Kastil</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="hover:text-yellow-400 transition-colors">{t.collections}</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors">{t.diamonds}</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors">{t.bespoke}</Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors">{t.about}</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer" />
          <ShoppingBag className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5 text-gray-400" />
                <span className="sr-only">Switch language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('id')}>
                Bahasa Indonesia
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Kastil Luxury Diamond Ring"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.timelessElegance}</h1>
          <p className="text-xl md:text-2xl mb-8">{t.discoverCollection}</p>
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 flex items-center">
                {t.exploreCollections}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black border border-yellow-400">
              {collections.map((item) => (
                <DropdownMenuItem key={item[language]} className="text-white hover:bg-yellow-400 hover:text-black cursor-pointer">
                  <Link href={`#${item.en.toLowerCase()}`} className="w-full">{item[language]}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">{t.ourCollections}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.slice(0, 3).map((category) => (
            <div key={category.en} className="relative h-64 group cursor-pointer">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={category[language]}
                layout="fill"
                objectFit="cover"
                className="rounded-lg brightness-75 group-hover:brightness-100 transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-semibold group-hover:underline">{category[language]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">{t.kastilLegacy}</h2>
          <p className="text-lg mb-8">{t.legacyDescription}</p>
          <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
            {t.discoverStory}
          </Button>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">{t.howToOrder}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-2 mr-4">
                <ShoppingCart className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold">{t.pickJewelry}</h3>
            </div>
            <p>{t.pickJewelryDesc}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-2 mr-4">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold">{t.messageUs}</h3>
            </div>
            <p>{t.messageUsDesc}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-2 mr-4">
                <CreditCard className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold">{t.payment}</h3>
            </div>
            <p>{t.paymentDesc}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-2 mr-4">
                <Truck className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold">{t.shipping}</h3>
            </div>
            <p>{t.shippingDesc}</p>
          </div>
        </div>
      </section>

      {/* How to Buyback */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12">{t.howToBuyback}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-black p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-2 mr-4">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold">{t.contactUs}</h3>
            </div>
            <p>{t.contactUsDesc}</p>
          </div>
          <div className="bg-black p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-2 mr-4">
                <Camera className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold">{t.shareProductDetails}</h3>
            </div>
            <p>{t.shareProductDetailsDesc}</p>
          </div>
          <div className="bg-black p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-2 mr-4">
                <Scale className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold">{t.itemEvaluation}</h3>
            </div>
            <p>{t.itemEvaluationDesc}</p>
          </div>
          <div className="bg-black p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-2 mr-4">
                <DollarSign className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold">{t.confirmAndGetPaid}</h3>
            </div>
            <p>{t.confirmAndGetPaidDesc}</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">{t.stayInformed}</h2>
          <p className="text-lg mb-8">{t.newsletterDescription}</p>
          <form className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-black border-gray-700 text-white placeholder-gray-400"
            />
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              {t.subscribe}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.customerCare}</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">{t.contactUs}</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">{t.shippingReturns}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.aboutKastil}</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">{t.ourStory}</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">{t.craftsmanship}</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">{t.sustainability}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.legal}</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">{t.privacyPolicy}</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">{t.termsOfService}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.connectWithUs}</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-yellow-400">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Kastil. {t.allRightsReserved}
        </div>
      </footer>
    </div>
  )
}
