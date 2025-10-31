export default function WeddingHero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1200)'}} 
      />
      
      <div className="relative z-10 text-center px-4 space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-serif text-cyan-800/50 tracking-wide">
            Azeez & Khadijah
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-cyan-300"></div>
            <p className="text-2xl md:text-3xl text-cyan-600 font-light">2025</p>
            <div className="h-px w-24 bg-cyan-300"></div>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
          Thank you for celebrating this special day with us
        </p>
        
        <div className="pt-8">
          <div className="inline-block animate-bounce">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <p className="text-blue-500 mt-2 text-sm uppercase tracking-widest">Scroll to view photos</p>
        </div>
      </div>
    </div>
  );
}