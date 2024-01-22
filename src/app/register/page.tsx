import CompanyLogo from "../ui/company-logo";
import { lusitana } from "../ui/fonts";
import Register from "../ui/register-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <CompanyLogo />
          </div>
        </div>
        <div className="rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Create Account
          </h1>
          <Register />
        </div>
      </div>
    </main>
  );
}
