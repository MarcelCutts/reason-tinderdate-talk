// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Layout,
  Fill,
  CodePane,
  Image,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./hacks.css");

const images = {
  reasonLogo: require("../assets/reason-logo.png"),
  twitterLogo: require("../assets/twitter-logo.png"),
  eslintLogo: require("../assets/eslint.png"),
  flowLogo: require("../assets/flow.png"),
  babelLogo: require("../assets/babel.png"),
  prettierLogo: require("../assets/prettier.png"),
  ocamlLogo: require("../assets/ocaml.png"),
  whatsApp: require("../assets/whatsapp.svg"),
  erlang: require("../assets/erlang.png"),
  elixir: require("../assets/elixir.png"),
  bloombergKeyboard: require("../assets/bloomberg.jpg"),
  reasonReactLogo: require("../assets/reasonreact.png"),
  atomTypes: require("../assets/types.png"),
  reasonTooling: require("../assets/reasontools.png"),
  refmt: require("../assets/refmt.gif"),
  betterErrors: require("../assets/bettererrors.png"),
  unikernels: require("../assets/unikernels.png"),
  seanGrove: require("../assets/seangrove.jpeg"),
  mateusz: require("../assets/mateusz.png"),
  elm: require("../assets/elm.png"),
  lair: require("../assets/lair.jpg"),
  number1: require("../assets/number1full.png"),
  number2: require("../assets/number2full.png"),
  deprecated: require("../assets/deprecated.png"),
  livescript: require("../assets/livescript.png"),
  typescript: require("../assets/typescript.png"),
  purescript: require("../assets/purescript.png"),
  reasonErrors: require("../assets/reasonerrors.png"),
  reactErrors: require("../assets/react-errors.png"),
  vsCodeEditor: require("../assets/vscode-editor.png"),
  benchmarks: require("../assets/benchmarks.png")
};

const videos = {
  synth: require("../assets/synthwave.webm")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#333333",
    tertiary: "#db4d3f",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide className="full-screen">
          <video autoPlay loop src={videos.synth} />
          <div>
          <Image src={images.reasonLogo} width="100%" />
          <Layout>
            <Fill>
              <Heading
                size={6}
                caps
                textColor="primary"
                bgColor="tertiary"
                margin={10}
                padding={"5px 0"}
              >
                Marcel Cutts
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={6}
                caps
                textColor="primary"
                bgColor="tertiary"
                margin={10}
                padding={"5px 0"}
              >
                @marcelcutts{" "}
                <Image
                  src={images.twitterLogo}
                  height="30px"
                  margin="3px 0 0 0"
                />
              </Heading>
            </Fill>
            </Layout>
          </div>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.reasonLogo} width="100%" />
          <Layout>
            <Fill>
              <Heading
                size={6}
                caps
                textColor="primary"
                bgColor="tertiary"
                margin={10}
                padding={"5px 0"}
              >
                Marcel Cutts
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={6}
                caps
                textColor="primary"
                bgColor="tertiary"
                margin={10}
                padding={"5px 0"}
              >
                @marcelcutts{" "}
                <Image
                  src={images.twitterLogo}
                  height="30px"
                  margin="3px 0 0 0"
                />
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="#2d2d2d">
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/callbacks.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="#2d2d2d">
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/promises.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="#2d2d2d">
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/async.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.flowLogo} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.babelLogo} height="250px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.eslintLogo} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.prettierLogo} height="250px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.reasonLogo} width="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.ocamlLogo} width="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps>
            Reason is...{" "}
          </Heading>
          <Appear>
            <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
              {" "}
              📝 New syntax for OCaml
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
              {" "}
              🌊 Compiler workflow
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
              {" "}
              🛁 Docs, libs, utils
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit textColor="primary">
            Can an old language like{" "}
          </Heading>
          <Heading fit textColor="primary">
            OCaml
          </Heading>
          <Heading fit textColor="primary">
            be relevant to us now?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.erlang} width="40%" />
          <Image src={images.elixir} width="40%" margin={"0 0 0 10%"} />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Image src={images.whatsApp} width="50%" />
          <Appear>
            <Heading fit caps textColor="primary">
              $19 billion
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit textColor="primary">
            Marcel, you absolute idiot
          </Heading>
          <Heading fit textColor="primary">
            OCaml
          </Heading>
          <Heading fit textColor="primary">
            {"doesn't run in browsers"}
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.bloombergKeyboard} width="100%" />
          <Appear>
            <Heading size={2}>Bucklescript</Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          Now independent
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2}>OCaml/Reason</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>Bucklescript</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>JavaScript</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={3} textAlign="left" textColor="primary" margin={10}>
            Why should I write JavaScript in a meta language for a 20 year old
            systems language that is compiled to JavaScript by a fancy keyboard
            company?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          POWER COUPLE
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          why ocaml over otherthings functinal but permission
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          TYPES performance bundle size targeting platforms compilation speed
          interop free fixie bicycle adoration ... structural typing not classes
        </Slide>

        <Slide>Type hype - better than TS flow in Ocaml</Slide>

        <Slide>Data structures first</Slide>

        <Slide>How stuff can mess up | TDD wont save you except if you do fuzzy testing</Slide>

        <Slide>
          terminal project BS config codelens Simple counter example Hindley
          errors "and remember, we have all this stuff just to emulate a poor version of this"
        </Slide>

        <Slide>more insidious varients?</Slide>

        <Slide>types security, gooness, happiness Haskell</Slide>


        <Slide>bucklescript</Slide>

        <Slide>performance compile ties human readable interop</Slide>

        <Slide>Summarise destruction</Slide>
        <Slide>Reason react</Slide>

        <Slide>Brownfield reaosn-babl reasonably typed bsloader</Slide>
        <Slide>Native</Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary" margin={10}>
            Developer
          </Heading>
          <Heading fit caps textColor="tertiary">
            experience
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.flowLogo} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.babelLogo} height="250px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.eslintLogo} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.prettierLogo} height="250px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.flowLogo} height="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary">
            OCaml is
          </Heading>
          <Heading fit caps textColor="tertiary">
            typed
          </Heading>
          <Appear>
            <Heading size={6} textColor="tertiary" margin={10}>
              (Flow is written in OCaml)
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.vsCodeEditor} />

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.babelLogo} width="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} caps textColor="tertiary" margin={10}>
            Bucklescript compiles
          </Heading>
          <Heading fit caps textColor="tertiary" margin={10}>
            10x faster
          </Heading>
          <Heading size={5} caps textColor="tertiary" margin={10}>
            than TypeScript
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary" margin={10}>
            Performant JS 🚀
          </Heading>
          <Image src={images.benchmarks} width="100%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary">
            Amazing
          </Heading>
          <Heading fit caps textColor="tertiary">
            Interop
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit textColor="tertiary">
            Human readable
          </Heading>
          <Heading fit textColor="tertiary">
            JS output
          </Heading>
          <Heading size={1} textColor="tertiary">
            😱
          </Heading>
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage={images.number1}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.number2}
          className="compiled"
        />

        <Slide transition={["slide"]} bgColor="secondary">
          <Image src={images.seanGrove} height="50%" />
          <Heading fit caps textColor="primary">
            @sgrove
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.prettierLogo} height="100%" />
        </Slide>

        <Slide transition={["slide"]} bgImage={images.refmt} />

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.eslintLogo} height="400px" />
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage={images.reasonErrors}
          className="dep"
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary" margin={10}>
            Language
          </Heading>
          <Heading fit caps textColor="tertiary">
            features
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} fit textColor="tertiary">
            Functional
          </Heading>
          <Heading size={2} textColor="tertiary" margin={"50px 0 50px 0"}>
            BUT
          </Heading>
          <Heading size={3} fit textColor="tertiary">
            Permissive
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">
            Type Hype!
          </Heading>
          <Heading size={1} textColor="tertiary" margin={"50 0 0 0"}>
            Pattern Matching!
          </Heading>
        </Slide>

        {
          // GQL example here?
        }

        {
          // Mura masa - type, invarient, pattern matching
        }

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary">
            Tames the
          </Heading>
          <Heading fit caps textColor="tertiary">
            meta-language
          </Heading>
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage={images.deprecated}
          className="dep"
        />


        <Slide>One more thing....</Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary" margin={10}>
            INSANE Reach
          </Heading>
          <Heading caps size={2} textColor="tertiary" margin={10}>
            +
          </Heading>
          <Heading caps fit textColor="tertiary" margin={10}>
            Native compilation
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary" margin={10}>
            x32/x64
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            💻 OCaml home turf
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            💻 Compile to system
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            💻 Interact with UI libs etc
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary" margin={10}>
            Mobile
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            📱 Compile to ARM
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            📱 Interop with ObjC libs etc
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            📱 Rad performance
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary" margin={10}>
            Embedded
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            🖲 Compile to ARM
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            🖲 Interop with... whatever
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            🖲 Rad performance
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary" margin={10}>
            ⚡️ Unikernels?! ⚡️
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.unikernels} />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary" margin={10}>
            Unikernels
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            {"⚡️ <50ms boot time for UK"}
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            {"⚡️ 100KB - 10MB in size"}
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            ⚡️ 10000 instances
          </Heading>
          <Heading
            size={5}
            textAlign="left"
            margin={"30px 0 0 50px"}
            caps
            textColor="secondary"
            margin={10}
          >
            ⚡️ Each UK into Git!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor={"tertiary"}>
          <Heading fit caps textColor="primary">
            Lets build some
          </Heading>
          <Heading fit caps textColor="primary">
            React!
          </Heading>
        </Slide>

        {
          // Docs are great now
          // Basic functino
          // every file is a module
          // get docs
        }

        {
          // Simple reaosn
        }

        {
          // r
        }
        {/*
        <Slide transition={["slide"]} bgColor={"primary"}>
          <Heading fit caps textColor="tertiary">
            You promised us
          </Heading>
          <Heading fit caps textColor="tertiary">
            Interop!
          </Heading>
        </Slide> */}

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.reasonReactLogo} width="40%" />
          <Heading size={6} fit caps textColor="tertiary" margin={10}>
            Reason-React Scripts
          </Heading>
        </Slide>


        {/*
        <Slide transition={["slide"]} bgImage={images.beerChuck}>
          <Heading fit caps textColor="tertiary">
            Create
          </Heading>
          <Heading fit caps textColor="tertiary">
            Reason React
          </Heading>
          <Heading fit caps textColor="tertiary">
            App
          </Heading>
        </Slide> */}

        {
          // Boo
          // But reason-react examples are great
        }

        <Slide transition={["slide"]}>
          <Heading fit caps textColor="tertiary">
            React Native?
          </Heading>
          <Heading
            fit
            caps
            textColor="primary"
            bgColor="tertiary"
            margin={"60px 0"}
          >
            bs-react-native
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            By @wokalski & @s_timme
          </Heading>
        </Slide>

        {
          // Babel Reason
        }

        <Slide transition={["slide"]} bgColor={"primary"}>
          <Heading fit caps textColor="tertiary">
            One more thing...
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit caps textColor="primary">
            Should I use
          </Heading>
          <Heading fit caps textColor="primary">
            Reason
          </Heading>
          <Heading fit caps textColor="primary">
            right now?
          </Heading>
        </Slide>

        {
          //  50% of messenger.com reason. companies us it. BUT
          // discord based dev
        }

        <Slide transition={["slide"]} bgColor="primary">
          <Heading
            size={3}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👶 Very immature
          </Heading>
          <Heading
            size={3}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            🌲 Small ecosystem
          </Heading>
          <Heading
            size={3}
            caps
            textAlign="left"
            textColor="tertiary"
            margin={10}
            padding={"30px 0"}
          >
            👩‍ New community
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.lair} />

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.elm} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.purescript} height="250px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.typescript} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.livescript} height="250px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary">
            Thanks
          </Heading>
          <Heading fit caps textColor="tertiary" margin={"0 0 80px 0"}>
            for listening!
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={6}
                caps
                textColor="primary"
                bgColor="tertiary"
                margin={10}
                padding={"5px 0"}
              >
                Marcel Cutts
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={6}
                caps
                textColor="primary"
                bgColor="tertiary"
                margin={10}
                padding={"5px 0"}
              >
                @marcelcutts{" "}
                <Image
                  src={images.twitterLogo}
                  height="30px"
                  margin="3px 0 0 0"
                />
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        {
          // Docs are discord
          // patterns yet to be establish
          // erorrs not super helpful
          // assumed knowelge
        }


        {
          // Somehing important here
          // Ive shipped a lot of softeare
          // very little of it good
          // PLanes, our hospitals
          // laptops window
        }
      </Deck>
    );
  }
}
