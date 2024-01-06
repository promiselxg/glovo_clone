import Image from "next/image";

const DownloadApp = () => {
  return (
    <>
      <section className="w-full flex">
        <div className="mx-auto w-[1200px]">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 flex flex-col items-center  justify-center">
              <Image
                src="https://glovoapp.com/images/landing/download-app-logo.svg"
                width={100}
                height={100}
                alt=""
              />
              <h1 className="font-bold text-3xl pt-3">Download the app</h1>
              <p className="text-md">
                Order anything and track it in real time with the Glovo app.
              </p>
              <div className="flex gap-5 pt-10">
                <Image
                  src="https://glovoapp.com/images/app_store/app-store-button.svg"
                  width={140}
                  height={100}
                  alt=""
                />
                <Image
                  src="https://glovoapp.com/images/google_play/google-play-button.svg"
                  width={150}
                  height={100}
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 -mt-[50px] -z-40 ">
              <picture>
                <img src="/img/download-app-desktop.png" alt="img" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
