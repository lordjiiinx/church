
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




export const metadata = {
  title: "KAG WAITHAKA",
  
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className=''>{children}</body>
    </html>
  );
}
