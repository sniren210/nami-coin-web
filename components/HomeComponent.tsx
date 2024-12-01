/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import { motion, MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
  BG_CASTLE,
  BG_DOOR,
  BG_ROAD,
  BG_SCREEN,
  BUTTON_BUY,
  BUTTON_X,
  BUTTONPROOF,
  CLOUD1,
  CLOUD2,
  CLOUD3,
  DOOR_LEFT,
  DOOR_RIGHT,
  GATE,
  LATTERN,
  SWAM,
  TITLE,
} from '@/lib/constants';

const HomeComponent = ({
  x,
  y,
  onClickHandler,
}: {
  onClickHandler: () => void;
  x: MotionValue<number>;
  y: MotionValue<number>;
}) => {
  return (
    <>
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src={BG_SCREEN}
          alt="Background Screen"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        style={{
          y: useTransform(y, [-100, 100], [8, -8]),
        }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image
          loading="eager"
          src={CLOUD2}
          alt="Cloud 2"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        style={{
          y: useTransform(y, [-100, 100], [10, -10]),
        }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image
          loading="eager"
          src={CLOUD3}
          alt="Cloud 3"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Image
          loading="eager"
          src={BG_CASTLE}
          alt="Castle"
          layout="fill"
          objectFit="cover"
          className="relative"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Image
          loading="eager"
          src={BG_ROAD}
          alt="Road"
          layout="fill"
          objectFit="cover"
          className="relative z-10"
        />
      </motion.div>
      <div
        className="cursor-pointer absolute inset-0 z-20 hover:scale-110 transition"
        onClick={onClickHandler}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            loading="eager"
            src={BG_DOOR}
            alt="Door Background"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] z-10 w-[150px] md:w-[200px]"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Image
            loading="eager"
            src={DOOR_LEFT}
            alt="Left Door"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] z-10 w-[150px] md:w-[200px]"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Image
            loading="eager"
            src={DOOR_RIGHT}
            alt="Right Door"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] z-10 w-[150px] md:w-[200px]"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Image
            loading="eager"
            src={GATE}
            alt="Gate"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] z-10 w-[150px] md:w-[200px] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
          />
        </motion.div>{' '}
      </div>
      <motion.div
        className="absolute inset-0"
        style={{
          y: useTransform(y, [-100, 100], [5, -5]),
        }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Image
          loading="eager"
          src={CLOUD1}
          alt="Cloud 1"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          opacity: { duration: 1, delay: 1.2 },
          y: { duration: 1, delay: 1.2 },
        }}
      >
        <Image
          loading="eager"
          src={LATTERN}
          alt="Lattern"
          width={180}
          height={180}
          className="absolute top-1/2 left-[85%] -translate-x-1/2 -translate-y-1/2 w-[120px] md:w-[180px]"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          opacity: { duration: 1, delay: 1.4 },
          y: { duration: 1, delay: 1.4 },
        }}
      >
        <Image
          loading="eager"
          src={LATTERN}
          alt="Lattern"
          width={180}
          height={180}
          className="absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 w-[120px] md:w-[180px]"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
          opacity: { duration: 1, delay: 1.6 },
          y: { duration: 1, delay: 1.6 },
        }}
      >
        <Image
          loading="eager"
          src={SWAM}
          alt="Swam"
          width={160}
          height={160}
          className="absolute top-[60%] lg:left-[65%] left-[70%] lg:-translate-x-1/2 -translate-x-1/4 -translate-y-1/2 w-[100px] md:w-[160px]"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
          opacity: { duration: 1, delay: 1.8 },
          y: { duration: 1, delay: 1.8 },
        }}
      >
        <Image
          loading="eager"
          src={SWAM}
          alt="Swam"
          width={160}
          height={160}
          className="absolute top-[60%] lg:left-[35%] left-[20%] lg:-translate-x-1/2 -translate-x-1/2 -translate-y-1/2 -scale-x-100 w-[100px] md:w-[160px]"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Image
          loading="eager"
          src={TITLE}
          alt="Title"
          width={400}
          height={200}
          objectFit="contain"
          className="absolute -top-[5%] left-1/2 -translate-x-1/2 z-20 w-[250px] md:w-[400px]"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[2%] lg:left-1/4 left-0 -translate-x-1/2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <a
          href="https://pump.fun/coin/HPLZgKBMUDCY8hSc6WT9BzrD3dfk8euQDyMov259pump"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            loading="eager"
            src={BUTTON_BUY}
            alt="Buy Button"
            width={200}
            height={80}
            objectFit="contain"
            className="cursor-pointer hover:scale-110 transition-transform relative z-20 w-[150px] md:w-[200px]"
          />
        </a>
      </motion.div>

      <motion.div
        className="absolute lg:bottom-[2%] bottom-[20%] flex justify-center w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <Image
          loading="eager"
          src={BUTTONPROOF}
          alt="Button PROOF"
          width={200}
          height={200}
          objectFit="contain"
          className="cursor-pointer hover:scale-110 transition-transform relative z-20 w-[150px] md:w-[200px]"
          onClick={() =>
            window.open(
              'https://github.com/LiZhiYr/yuli/blob/main/packages/core/src/defaultCharacter.ts',
              '_blank'
            )
          }
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[2%] lg:right-1/4 right-0 -translate-x-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.4 }}
      >
        <Image
          loading="eager"
          src={BUTTON_X}
          alt="Close Button"
          width={200}
          height={80}
          objectFit="contain"
          className="cursor-pointer hover:scale-110 transition-transform relative z-20 w-[150px] md:w-[200px]"
          onClick={() =>
            window.open(
              'https://x.com/yuliwrld?s=21&t=qCtUw31_HDe6N1JCXqxpnA',
              '_blank'
            )
          }
        />
      </motion.div>
    </>
  );
};

export default HomeComponent;
