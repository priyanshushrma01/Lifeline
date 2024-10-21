import { Play, SquareArrowOutUpRight, HandCoins } from "lucide-react";

export function Works() {
  return (
    <section className="w-full bg-gray-800 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-800">
            HOW IT WORKS
          </h2>
          <p className="max-w-[900px] text-purple-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Start a Fundraiser in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Start your fundraiser",
              description:
                "It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
              icon: <Play className="h-12 w-12 text-purple-600" />,
            },
            {
              title: "Share your fundraiser",
              description:
                'All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.',
              icon: <SquareArrowOutUpRight className="h-12 w-12 text-purple-600" />,
            },
            {
              title: "Withdraw Funds",
              description:
                "The funds raised can be withdrawn without any hassle directly to your bank account.",
              icon: <HandCoins className="h-12 w-12 text-purple-600" />,
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              {item.icon}
              <h3 className="text-xl font-bold text-purple-800">{item.title}</h3>
              <p className="text-purple-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
