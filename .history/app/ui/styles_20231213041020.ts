interface Styles {
  boxWidth: string;

  heading2: string;
  paragraph: string;

  flexCenter: string;
  flexStart: string;

  paddingX: string;
  paddingY: string;
  padding: string;

  marginX: string;
  marginY: string;
}

const styles: Styles = {
  boxWidth: 'xl:max-w-[1200px] w-full',

  heading2:
    'font-semibold xs:text-[28px] text-[32px] text-white w-full',
  paragraph:
    'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'md:px-16 px-6',
  paddingY: 'md:py-16 py-6',
  padding: 'md:px-16 px-6 sm:py-12 py-4',

  marginX: 'md:mx-16 mx-6',
  marginY: 'md:my-16 my-6',
};

export default styles;
