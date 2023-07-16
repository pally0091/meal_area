import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  const facts = [
    {
      title: "Fact 1",
      content:
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    },
    {
      title: "Fact 2",
      content:
        "Apples float because they are 25% air, making them one of the few fruits that can bob on water.",
    },
    {
      title: "Fact 3",
      content:
        "Peanuts aren't actually nuts. They are legumes related to lentils, chickpeas, and soybeans. They grow underground, unlike true tree nuts like almonds or walnuts.",
    },
    {
      title: "Fact 4",
      content:
        "Bananas are berries, but strawberries are not. According to botanical definitions, berries are fruits produced from the ovary of a single flower with seeds embedded in the flesh. By this definition, bananas qualify as berries, while strawberries do not.",
    },
    {
      title: "Fact 5",
      content:
        "Carrots were originally purple. The first cultivated carrots were purple, not orange. Orange carrots, as we know them today, were developed in the 17th century by Dutch farmers as a tribute to the House of Orange.",
    },
    {
      title: "Fact 6",
      content:
        "The world's most expensive spice is saffron. Saffron comes from the stigma of the crocus flower and is painstakingly hand-harvested. It takes around 75,000 saffron blossoms to produce just one pound of saffron, making it one of the costliest spices in the world.",
    },
    {
      title: "Fact 7",
      content:
        "Chocolate was once used as currency. The ancient Maya civilization of Central America used cocoa beans as currency. They believed cocoa beans had divine properties and valued them so much that they were used for trading goods and services.",
    },
    {
      title: "Fact 8",
      content:
        "The world's largest pizza was over 13,580 square feet (1,263 square meters). It was made in Rome, Italy, in 2012 and set a Guinness World Record for the largest pizza ever made.",
    },
    {
      title: "Fact 9",
      content:
        "The world's spiciest chili pepper is the Carolina Reaper. Measuring over 2.2 million Scoville Heat Units (SHU), this pepper is so potent that it can cause intense burning sensations and is not recommended for inexperienced chili eaters.",
    },
    {
      title: "Fact 10",
      content:
        "The most widely eaten meat in the world is pork. Pork is a popular meat consumed in various forms and cuisines around the globe, making it the most commonly consumed meat worldwide.",
    },
    {
      title: "Fact 11",
      content:
        "Oranges are not naturally occurring fruits. They are a hybrid of the pomelo and mandarin, and their origin can be traced back to ancient Southeast Asia.",
    },
    {
      title: "Fact 12",
      content:
        "The world's oldest known recipe is for beer. The ancient Sumerians, around 4,000 BCE, wrote the recipe on a clay tablet, providing detailed instructions for brewing beer.",
    },
    {
      title: "Fact 13",
      content:
        "Cherries are a member of the rose family. They are closely related to other stone fruits such as peaches, plums, and apricots.",
    },
    {
      title: "Fact 14",
      content:
        "The word 'avocado' comes from the Aztec word 'ahuacatl,' which means testicle. The name is believed to have been inspired by the fruit's shape and appearance.",
    },
    {
      title: "Fact 15",
      content:
        "Tomatoes were once thought to be poisonous. In the 18th century, people in Europe believed that tomatoes, being a member of the nightshade family, were toxic. It wasn't until the 19th century that tomatoes gained widespread acceptance as a safe and delicious food.",
    },
    {
      title: "Fact 16",
      content:
        "Cucumbers are a fruit, not a vegetable. They belong to the same family as melons and squash and contain seeds, making them botanically classified as fruits.",
    },
    {
      title: "Fact 17",
      content:
        "The world's most expensive coffee is Kopi Luwak, also known as civet coffee. It is made from coffee beans that have been eaten and excreted by the Asian palm civet. The unique fermentation process is said to enhance the coffee's flavor, but the production process has raised ethical concerns.",
    },
    {
      title: "Fact 18",
      content:
        "The 'French' dip sandwich didn't originate in France. It was actually invented in Los Angeles, California, in the early 20th century. The sandwich is typically filled with roast beef and served with au jus for dipping.",
    },
    {
      title: "Fact 19",
      content:
        "Pineapples were once so rare and expensive that they were considered a symbol of wealth and hospitality. In the 1700s, European royalty often displayed pineapples at their gatherings to impress guests.",
    },
    {
      title: "Fact 20",
      content:
        "The world's largest food fight, called 'La Tomatina,' takes place in Buñol, Spain. Thousands of participants throw overripe tomatoes at each other during this annual event held on the last Wednesday of August.",
    },
    {
      title: "Fact 21",
      content:
        "The popsicle was invented by an 11-year-old boy. In 1905, Frank Epperson left a mixture of powdered soda, water, and a stirring stick outside overnight during a freezing San Francisco night, creating the world's first popsicle.",
    },
    {
      title: "Fact 22",
      content:
        "The hottest part of a chili pepper is the placenta, the white, inner membrane that holds the seeds. Contrary to popular belief, the seeds themselves are not the hottest part of the pepper.",
    },
    {
      title: "Fact 23",
      content:
        "The first soup was probably made from hippopotamus. Archaeological evidence suggests that ancient humans may have boiled hippopotamus bones in water as early as 6,000 BCE to create a simple broth.",
    },
    {
      title: "Fact 24",
      content:
        "The word 'sandwich' comes from the Earl of Sandwich, who requested his meat to be placed between two slices of bread so he could eat it easily while playing cards.",
    },
    {
      title: "Fact 25",
      content:
        "In South Korea, there's a museum dedicated to kimchi. The Kimchi Field Museum in Seoul showcases the history and cultural significance of this traditional Korean fermented side dish.",
    },
    {
      title: "Fact 26",
      content:
        "The world's most massive food fight is the 'La Tomatina' festival in Spain, where over 100 metric tons of tomatoes are thrown during the event.",
    },
    {
      title: "Fact 27",
      content:
        "A banana is technically a berry, while a strawberry is not. Botanically speaking, berries are fruits produced from the ovary of a single flower with seeds embedded in the flesh. Bananas meet this definition, but strawberries do not.",
    },
    {
      title: "Fact 28",
      content:
        "The durian fruit is known for its strong odor, often described as a mix of rotten onions and turpentine. It is banned in many hotels and public transport systems in Southeast Asia due to its pungent smell.",
    },
    {
      title: "Fact 29",
      content:
        "The world's largest hamburger weighed 2,014 pounds (914 kg) and was cooked in Minnesota, USA. It contained 60 pounds of bacon, 50 pounds of lettuce, 50 pounds of onions, 40 pounds of pickles, and 40 pounds of cheese.",
    },
    {
      title: "Fact 30",
      content:
        "There is a town in Norway called Hell. It is known for its beautiful scenery and has a railway station sign that reads 'Hell.' Travelers can even send postcards from Hell.",
    },
  ];

  return (
    <div className="w-[95%] mx-auto">
      <h1 className="text-center py-2 italic font-semibold text-4xl border-4 border-black border-double rounded-xl mb-20">
        Facts about foods
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 min-[320px]:grid-cols-1 gap-10  py-20 ">
        {facts.map((fact) => (
          <Blog
            key={fact.title}
            fact={fact}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
