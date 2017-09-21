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
  benchmarks: require("../assets/benchmarks.png"),
  bsLogo: require("../assets/bs-logo.png"),
  reLogo: require("../assets/reasonlogo.jpg")
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
          <Image src={images.bsLogo} height={"100%"} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2}>OCaml/Reason</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>Bucklescript</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>JavaScript</Heading>
        </Slide>

        <Slide>
          | Demo installable | "I'm not joking, this is a real thing you can do"
          | bs platform install | basic project | show round | write a thing |
          run in node
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit caps textColor="primary" margin={10}>
            OK, you can...
          </Heading>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading fit caps textColor="primary" margin={10}>
            but
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={3} textAlign="left" textColor="primary" margin={10}>
            Why should I write applications in a meta language for a 20 year old
            systems language that is compiled to JavaScript by a fancy keyboard
            company?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.bsLogo} width="80%" />
            </Fill>
            <Fill>
              <Image src={images.reLogo} width="80%" />
            </Fill>
          </Layout>
          <Heading fit caps margin={"50px 0 0 0"}>
            POWER COUPLE
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps>
            Why bother?
          </Heading>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              ⚡️ Lightning compilation
            </Heading>
          </Appear>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              🏎 Incredibly performant JS
            </Heading>
          </Appear>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              📝 Editor integration bliss
            </Heading>
          </Appear>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              🐜 Tiny bundle sizes
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading fit caps>
            Why bother?
          </Heading>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              🤔 Staggering type inference
            </Heading>
          </Appear>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              💥 Destruction of null
            </Heading>
          </Appear>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              🔊 100% type sound
            </Heading>
          </Appear>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              🤝 Joyful interop
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading fit caps>
            Why bother?
          </Heading>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              🖲 Native compilation
            </Heading>
          </Appear>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              ⛑ Saviour errors
            </Heading>
          </Appear>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              😴 Sleeping 8 hours a night
            </Heading>
          </Appear>
          <Appear>
            <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
              🚲 Hipster cred
            </Heading>
          </Appear>
        </Slide>

        {
          // What does ML stand for again?
        }

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
          <Layout>
            <Fill>coffeescript</Fill>
            <Fill>clojurescript</Fill>
          </Layout>
        </Slide>

        <Slide>Why ocaml, not such an odd duck</Slide>

        <Slide>So what's writing reasonml actually like</Slide>

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
          <Heading fit textColor="tertiary">
            ReasonML
          </Heading>
          <Heading size={1} textColor="tertiary" margin={"50px 0 50px 0"}>
            ❤️
          </Heading>
          <Heading fit textColor="tertiary">
            ECMAScript 201x
          </Heading>
        </Slide>

        <Slide>Basic syntax</Slide>

        {
          // goal is to make people feel excited
          // and confident we can actually
          // really use this
        }

        {
          // BUT HOW DO WE ACHIEVE ALL THESE INCREDIBLE THINGS AS ADVERTISED
        }

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit textColor="tertiary">
            TYPE
          </Heading>
          <Heading fit textColor="tertiary" margin={"50px 0 50px 0"}>
            HYPE
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.flowLogo} width="90%" />
            </Fill>
            <Fill>
              <Image src={images.typescript} width="90%" />
            </Fill>
          </Layout>
        </Slide>

        {
          // two houses alike in dignity
          // it all comes back to types
          // types arent classes here
          // type systems and engines  differnet
          // flow written in ocaml
          // TS, dev exp, NOT type sound, cannot compete
          // flow, addon, so it has flaws also
          // Not just feature ticking
          // data structures first <- slide
          // type in, out, great
        }

        <Slide>
          How stuff can mess up | TDD wont save you except if you do fuzzy
          testing
        </Slide>

        <Slide>
          terminal project BS config codelens Simple counter example Hindley
          errors "and remember, we have all this stuff just to emulate a poor
          version of this"
        </Slide>

        {
          // 1. Simple example
          // 2. do in reason
          // 3. force fail - boom and suggest
          // 4. tic tac toe
          // 5. external
          // 5. Contact email
        }

        {
          // language lets you write in es6 in a lot of ways
          // but gives you phenomoinal tools to enchance
        }

        <Slide>more insidious varients are cool, not just a string?</Slide>

        <Slide>types security, gooness, happiness Haskell</Slide>

        <Slide>bucklescript</Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit textAlign="left" textColor="primary" margin={10}>
            Hey! You promised
          </Heading>
          <Heading fit textAlign="left" textColor="primary" margin={10}>
            more
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.bsLogo} height={"100%"} />
        </Slide>

        {
          // Type soundnesss allows all kinds of craziness
        }

        {}

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={3} textAlign="left" textColor="primary" margin={10}>
            OCaml compiles fast
          </Heading>
          Tweet here
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={3} textAlign="left" textColor="primary" margin={10}>
            BS does too
          </Heading>
          ????
        </Slide>

        {
          // OCAML obssessive about speed
        }

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={3} textAlign="left" textColor="primary" margin={10}>
            Perforomance - clever tricks
          </Heading>
          ????
        </Slide>

        <Slide>BSB vid here</Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={3} textAlign="left" textColor="primary" margin={10}>
            Perforomance - clever tricks
          </Heading>
          ????
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Layout>
            <Fill>JS image</Fill>
            <Fill>reason image</Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Layout>
            <Fill>JS image</Fill>
            <Fill>now-js image</Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Layout>
            <Fill>Speed/Size</Fill>
            <Fill>Speed/Size</Fill>
          </Layout>
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

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading fit caps textColor="primary">
            Interop
          </Heading>
        </Slide>

        {
          // poeple design these fantastic systesm
          // amazing idea
          // but interop is maybe the most important
          // BS FFI is really, really good and useable
          // Other JS, the DOM etc
        }

        <Slide>In JS? Compile to JS, bundle it all in. </Slide>

        <Slide>But what if you want to touch something outside the magic type garden?</Slide>


        <Slide>performance compile ties human readable interop</Slide>

        <Slide>Summarise ticking off four managerie ecosystem things</Slide>

        {
          // reason originally in sml
        }
        <Slide>Reason react</Slide>

        <Slide>Brownfield reaosn-babl reasonably typed bsloader</Slide>
        <Slide>Native</Slide>

        <Slide>One more thung....s</Slide>

        <Slide>FAQs</Slide>

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
          // types not super helpful sometimes
          // wtf is unit
          // wtf is this error
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
