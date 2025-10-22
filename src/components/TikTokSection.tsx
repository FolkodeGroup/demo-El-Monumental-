const tiktokVideos = [
  // Puedes agregar más enlaces de videos aquí
  'https://www.tiktok.com/@tiktok/video/7137441234567891234',
  'https://www.tiktok.com/@tiktok/video/7137445678901234567',
];

const TikTokSection = () => (
  <section id="tiktok" className="py-12 bg-[#a12a2a]"> {/* rojo intenso */}
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-serif tracking-wide text-white">En redes sociales</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {tiktokVideos.map((url, idx) => (
          <div key={idx} className="w-full max-w-xs md:max-w-sm">
            <iframe
              title={`TikTok video ${idx + 1}`}
              src={`https://www.tiktok.com/embed/v2/${url.split('/').pop()}`}
              width="100%"
              height="600"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-xl border border-gray-200 shadow-md bg-white"
              style={{ minHeight: 500 }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TikTokSection;
