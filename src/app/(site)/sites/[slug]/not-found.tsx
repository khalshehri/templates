export default function SiteNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Site Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          This site doesn&apos;t exist or hasn&apos;t been published yet.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Safahati
        </a>
      </div>
    </div>
  );
}
