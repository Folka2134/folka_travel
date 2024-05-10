// "use server";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="my-24 flex justify-center">{children}</div>;
}
