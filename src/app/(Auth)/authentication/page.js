// LoginPage.js (Server Component)
import LoginClient from "./LoginClient";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-linear-to-r from-[#e2e2e2] to-[#c9d6ff] flex items-center justify-center flex-col font-['Montserrat',sans-serif]">
            {/* Font Awesome Link remains in Server Component */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            />
            
            {/* Client Component Call */}
            <LoginClient />
        </main>
    );
}