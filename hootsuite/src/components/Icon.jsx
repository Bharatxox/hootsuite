import rocket from "../assets/rocket.svg";
import chart from "../assets/chart.svg";
import message from "../assets/message.svg";

const Icon = () => {
  const list3 = [
    {
      icon: rocket,
      num: "2,500",
      title: "enterprise organization successfully launched",
    },
    {
      icon: chart,
      num: "45,000",
      title: "enterprise users onboarded seamlessly",
    },
    {
      icon: message,
      num: "200,000+",
      title: "professionals trained on product and strategy",
    },
  ];
  return (
    <section className="bg-white text-black p-[50px]">
      <div className="flex justify-center gap-7">
        {list3.map((e, index) => (
          <div
            key={e.num + index}
            className="flex flex-col justify-center gap-5 "
          >
            <img src={e.icon} className="h-[130px]" />
            <p className="font-bold">{e.num}</p>
            <p className="font-normal">{e.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Icon;
