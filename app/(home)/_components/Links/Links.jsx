const { Button } = require("@/components/ui/button");

const ButtonLink = ({ country }) => {
  return (
    <>
      <Button className="bg-[#fff3daff] text-[#000000ff] hover:bg-[#fff3daff] rounded-[24px] px-[38px] py-[26px] font-bold">
        {country}
      </Button>
    </>
  );
};

export { ButtonLink };
