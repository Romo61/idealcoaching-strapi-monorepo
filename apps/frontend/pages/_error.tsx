import { AppContext } from 'next/app'
import Image from 'next/image'
import { getGlobalData } from 'utils/api'

function Error({ statusCode }) {
  return (
    <div className="h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p> */}

        <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 flex justify-center">
              <a href="/" className="inline-flex">
                <span className="">Home</span>
              </a>
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                  {statusCode} error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page not found.
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="text-base font-medium text-primary-600 hover:text-primary-500"
                  >
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

Error.getInitialProps = async ({ res, err }, appContext: AppContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  // const globalLocale = await getGlobalData(appContext.router.locale)

  return { statusCode }
}

export default Error
