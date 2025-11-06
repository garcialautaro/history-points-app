import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-secondary shadow-2xl border-b-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image
                src="/images/wineobs-logo.svg"
                alt="Wineobs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                History Points Race
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">
                Powered by Wineobs
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
