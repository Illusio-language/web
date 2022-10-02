export default function Footer() {
    return (
      <>
        <div className="roboto-medium mx-auto flex max-w-[100rem] flex-col items-center py-8 px-8 pt-4 md:items-center md:justify-between md:px-6 lg:flex-row lg:justify-between lg:px-8">
          <div>
            <a href="#" className="text-3xl text-white">
              Illusio
            </a>
          </div>
          <div className="roboto-light lg:text-md my-6 space-x-6 text-sm lg:my-0 lg:space-x-12">
            <a href="#">Github</a>
            <a href="#">Docs</a>
            <a href="#">Team</a>
            <a href="#">Download</a>
            <a href="#">Contact</a>

          </div>
        </div>
      </>
    );
  }
  