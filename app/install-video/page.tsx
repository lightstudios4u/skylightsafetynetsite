export default function InstallVideoPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-black px-4 py-12">
      <div className="w-full max-w-4xl">
        <h1 className="mb-6 text-center text-2xl font-extrabold text-white sm:text-3xl">
          Install Video
        </h1>
        <div className="w-full overflow-hidden rounded-xl shadow-2xl" style={{ aspectRatio: "16/9" }}>
          <iframe
            title="Skylight Safety Net Install Video"
            src="https://player.vimeo.com/video/1175542695?h=ad89473178"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", width: "100%", height: "100%" }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
