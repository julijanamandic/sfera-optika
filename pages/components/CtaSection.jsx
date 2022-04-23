import Link from 'next/link';

export default function CtaSection() {
    return (
        <div className="relative bg-gray-800">
            <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
                    alt="Pružanje najkvalitetnije usluge kod problema vezanih za vid"
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Imate pitanje vezano za neki artikal ili uslugu?</h2>
                    <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Slobodno nas kontaktirajte</p>
                    <p className="mt-3 text-lg text-gray-300">
                       Tu smo za Vas! U najkraćem roku pružićemo Vam uslugu najboljeg kvaliteta.
                    </p>
                    <div className="mt-8">
                        <div className="inline-flex rounded-md shadow">
                        <Link href="/kontakt">
                            <a
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                            >
                                Kontaktiraj nas
                               
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}