import Button from "../utils/Button";
const HerosSection = () => {
  return (
    <section className="bg-primary py-[60px] flex flex-col gap-7">
      <h1 className="font-bold">See value from social sooner</h1>
      <p className="px-[400px]">
        Our training and strategic service have helped thousands of
        organizations succeed on social.
      </p>
      <div>
        <Button name={"Request a Demo"} />
      </div>
    </section>
  );
};

export default HerosSection;
