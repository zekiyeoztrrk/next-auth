export default function Unauthorized() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600">Yetkisiz Erişim</h1>
      <p className="mt-2">Bu sayfaya erişim izniniz yok.</p>
    </div>
  );
}
