import { Flex } from "@chakra-ui/react";
import { Banner } from ".";

export default function Home({ propertiesForSale, propertyForRent }) {
  console.log(propertiesForSale, propertyForRent);
  return (
    <div>
      <Banner
        purpose="RENT A HOME"
        title1="Rental homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting" // Corrected typo here
        linkName="/search?purpose=for-rent" // Corrected typo here
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {/* Fetch the properties and map over them..*/}
      </Flex>
      <Banner
        purpose={"BUY A HOME"}
        title1="Find Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying" // Corrected typo here
        linkName="/search?purpose=for-sale" // Corrected typo here
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </div>
  );
}
