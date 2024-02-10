

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const random = getRandomInt(2);
    // if (random === 1) {
    //   throw new Error("Error loading Product");
    // }
    return (
        <div>
            <h1 className="text-4xl mb-5">Product Page</h1>
            {children}
        </div>
    );
}
