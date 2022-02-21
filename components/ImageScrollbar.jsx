import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibillityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const LeftArrow = () => {
    const {scrollPrev } = useContext(VisibilityContext)
}

const ImageScrollbar = () => {
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>

    </ScrollMenu>
}
