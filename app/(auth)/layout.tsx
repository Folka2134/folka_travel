// "use server";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-10 mb-44 flex justify-center md:mb-36">{children}</div>
  );
}
