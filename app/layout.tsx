// app/layout.tsx
"use client"
import { Inter } from "next/font/google";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageProvider } from './(after_login)/story/context/PageContext';
import "./globals.css";
import styles from './layout.module.css';
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();


  return (


    
    <html lang="en">
       <PageProvider>
      <body className={inter.className}>


        {['/', '/login', '/signup'].includes(pathName) && (
          <div className="header " style={{ background: 'linear-gradient(90deg, #F5FCF4 0%, #E5F8E5 100%)' }}>
            {/* header Part start */}
            <div className="header_logo mx-auto w-9/12 flex justify-between" style={{ padding: '10px 0px' }} >
              {/* logo Part start */}

              <div className="logo me-7">
                <Link href="/">
                  <img src="/Landing_Page_image/Logo.png" alt="Example SVG" />
                </Link>

              </div>

              {/* logo end */}

              {/* links start */}
              <div className="header_links flex items-center  justify-around " style={{ width: "370px" }}>
                <div className={`${styles.Header_links} selling`}>Selling</div>
                <div className={` ${styles.Header_links} about_us`}>About Us</div>
                <div className={` ${styles.Header_links} hire`}>Hire</div>
              </div>
              {/* links end */}

              {/* header button start */}
              {pathName == "/" && (
                <>
                  <div className="header_button flex items-center  justify-between" style={{ width: "170px" }}>

                    {/* Sign Up button start */}
                    <Link href="/signup">
                      <button
                        type="button"
                        className={`${styles.LogIn_button} LogIn_button`}
                      >
                        Sign Up
                      </button>
                    </Link>

                    {/* Sign Up button end */}

                    {/* Log In button Start */}
                    <Link href="/login">
                      <button
                        type="button"
                        className={`${styles.LogIn_button} LogIn_button`}
                      >
                        Log In
                      </button>
                    </Link>

                    {/* Log In button end */}

                  </div>
                </>
              )


              }

              {pathName == "/signup" && (
                <>
                  <div className="header_button flex justify-end items-center" style={{ width: "170px" }}>


                    {/* Log In button Start */}


                    <Link href="/login" ><button
                      type="button"
                      className={`${styles.LogIn_button} LogIn_button`}

                    >
                      Log In
                    </button></Link>

                    {/* Log In button end */}

                  </div>
                </>
              )


              }

              {pathName == "/login" && (
                <>
                  <div className="header_button flex justify-end items-center" style={{ width: "170px" }}>


                    {/* Log In button Start */}

                    <Link href="/signup">
                      <button
                        type="button"
                        className={`${styles.LogIn_button} LogIn_button`}
                      >
                        Sign Up
                      </button>
                    </Link>

                    {/* Log In button end */}

                  </div>
                </>
              )


              }


              {/* header button end */}
            </div>
            {/* Header Line start  */}
            <div className="line" style={{ borderBottom: '2px solid white' }}></div>
            {/* Header line end  */}


            {/* Header part end  */}

          </div>
        )}


        {children}
      </body>
      </PageProvider>
    </html>
  
  );
}
