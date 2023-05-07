import { Image, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

interface MenuItemProps {
  icon: string;
  name: string;
  link: string;
  key: number
}

function MenuItem({ icon, name, link, key }: MenuItemProps) {
  return (
    <LinkBox
      bg={"navyBlue"}
      borderBottom={"4px"}
      borderBottomColor={"accentBlue"}
      color={'lightOrange'}
      width={'full'}
      height={'80px'}
      key={key}
    >
      <LinkOverlay pl={'10px'} h='full' href={link} display={'flex'} justifyContent={'start'} alignItems={'center'} >
        <Image src={icon} width={"40px"} mr={'20px'} />
        <Text fontSize={'26px'}>{name}</Text>
      </LinkOverlay>
    </LinkBox>
  );
}

export default MenuItem;
