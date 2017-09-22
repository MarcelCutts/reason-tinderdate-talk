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
  reLogo: require("../assets/reasonlogo.jpg"),
  p1: require("../assets/placeholders/1.png"),
  p2: require("../assets/placeholders/2.png"),
  p3: require("../assets/placeholders/3.png"),
  p4: require("../assets/placeholders/4.png"),
  p5: require("../assets/placeholders/5.png"),
  p6: require("../assets/placeholders/6.png"),
  p7: require("../assets/placeholders/7.png"),
  p8: require("../assets/placeholders/8.png"),
  p9: require("../assets/placeholders/9.png"),
  p10: require("../assets/placeholders/10.png"),
  p11: require("../assets/placeholders/11.png"),
  p12: require("../assets/placeholders/12.png"),
  p13: require("../assets/placeholders/13.png"),
  reFn: require("../assets/refn.png"),
  jsFn: require("../assets/jsfn.png"),
  cljsLogo: require("../assets/cljslogo.svg"),
  coffeeLogo: require("../assets/coffeelogo.png"),
  perfTweet: require("../assets/perfTweet.png"),
  smsjs: require("../assets/placeholders/smsjs2.png"),
  smsre: require("../assets/placeholders/recontentcheck.png"),
  refrom: require("../assets/placeholders/refrrom.png"),
  undefjs: require("../assets/placeholders/smsundefined.png"),
  undefre: require("../assets/placeholders/resenderlocation.png"),
  undefrem: require("../assets/placeholders/reoverload.png"),
  vac: require("../assets/placeholders/vac.png"),
  g1: require("../assets/gig/1.png"),
  g2: require("../assets/gig/2.png"),
  g3: require("../assets/gig/3.png"),
  g5: require("../assets/gig/5.png"),
  g6: require("../assets/gig/6.png"),
  g7: require("../assets/gig/7.png"),
  g8: require("../assets/gig/8.png"),
  ojcompare: require("../assets/ojcompare.png"),
  exPiz: require("../assets/externals/pi.png"),
  exPizLabels: require("../assets/externals/pilabel.png"),
  addModule: require("../assets/externals/externaljs.png"),
  addModuleRe: require("../assets/externals/externalre.png"),
  reinjs1: require("../assets/externals/reinjs1.png"),
  reinjs2: require("../assets/externals/reinjs2.png"),
  reinjs3: require("../assets/externals/reinjs3.png"),
  webpacklogo: require("../assets/webpacklogo.png"),
  reimport: require("../assets/directimport.png")
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

        <Slide transition={["slide"]} bgColor="primary" notes={"testing"}>
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

        <Slide
          transition={["slide"]}
          bgImage={images.p1}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p2}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p3}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p4}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p7}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p8}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p13}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p9}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p10}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p11}
          className="compiled"
        />

        <Slide
          transition={["slide"]}
          bgImage={images.p12}
          className="compiled"
        />

        {
          // <Slide>
          //   | Demo installable | "I'm not joking, this is a real thing you can do"
          //   | bs platform install | basic project | show round | write a thing |
          //   run in node
          // </Slide>
        }

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
            <Fill>
              <Image src={images.coffeeLogo} height="250px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.typescript} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.livescript} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.cljsLogo} height="250px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} textColor="tertiary">
            OCaml + Type Erasure
          </Heading>
          <Heading size={2} textColor="tertiary" margin={"50px 0 50px 0"}>
            ≈
          </Heading>
          <Heading size={3} textColor="tertiary">
            JavaScript
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={3} caps textColor="primary">
            What's writing in
          </Heading>
          <Heading fit caps textColor="primary">
            ReasonML
          </Heading>
          <Heading size={3} caps textColor="primary">
            actually like?
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
          <Heading fit textColor="tertiary">
            ReasonML
          </Heading>
          <Heading size={1} textColor="tertiary" margin={"50px 0 50px 0"}>
            {"<3"}
          </Heading>
          <Heading fit textColor="tertiary">
            ECMAScript 201x
          </Heading>
        </Slide>

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
          <Heading fit textColor="tertiary">
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

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps>
            The gig
          </Heading>
        </Slide>

        <Slide bgImage={images.g1} />
        <Slide bgImage={images.g2} />
        <Slide
          bgImage={images.g3}
          notes={
            "where you fucked up, how you fucked up, and how to unfuck yourself"
          }
        />
        <Slide bgImage={images.g5} />
        <Slide bgImage={images.g6} />
        <Slide bgImage={images.g7} />
        <Slide bgImage={images.g8} />

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

        {
          // <Slide>
          //   How stuff can mess up | TDD wont save you except if you do fuzzy
          //   testing
          // </Slide>
        }

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={6} caps fit textColor="primary" margin={10}>
            Why
          </Heading>
          <Heading size={6} caps fit textColor="primary" margin={10}>
            bother?
          </Heading>
        </Slide>

        {
          // Already so much effort is put into making code good
          // flow, lint, ci, automated testing, fuzzy testsing
          // this is better smarter safer
          // unreasonable states impossile
        }

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary" margin="10px 0">
            Common JS
          </Heading>
          <Heading fit caps textColor="tertiary" margin="10px 0">
            Pitfalls
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary">
            1.
          </Heading>
          <Heading size={2} caps textColor="tertiary" margin="50px 0 0 0">
            Runtime 💥
          </Heading>
        </Slide>

        <Slide bgImage={images.smsjs} />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary">
            2.
          </Heading>
          <Heading size={2} caps textColor="tertiary" margin="50px 0 0 0">
            Passing undefined 💥
          </Heading>
        </Slide>

        <Slide bgImage={images.undefjs} />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary">
            3.
          </Heading>
          <Heading size={2} caps textColor="tertiary" margin="50px 0 0 0">
            Twisted logic 💥
          </Heading>
        </Slide>

        <Slide bgImage={images.vac} />

        {
          // <Slide>
          //   terminal project BS config codelens Simple counter example Hindley
          //   errors "and remember, we have all this stuff just to emulate a poor
          //   version of this"
          // </Slide>
        }

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

        {
          // <Slide>more insidious varients are cool, not just a string?</Slide>
          // <Slide>types security, gooness, happiness Haskell</Slide>
          // <Slide>bucklescript</Slide>
        }

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit caps textColor="primary" margin={10}>
            Hey! You promised
          </Heading>
          <Heading fit caps textColor="primary" margin={10}>
            more
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.bsLogo} height={"100%"} />
        </Slide>

        {
          // Type soundnesss allows all kinds of craziness
        }

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

        <Slide transition={["slide"]} bgImage={images.perfTweet} />

        {
          // OCAML obssessive about speed
        }

        <Slide>BSB vid here</Slide>

        <Slide transition={["fade"]} bgImage={images.ojcompare} />

        <Slide
          transition={["fade"]}
          bgImage={images.ojcompare}
          maxWidth={window.innerWidth}
          maxHeight={window.innerHeight}
        >
          <Layout>
            <Fill>
              <Heading textColor="primary" size={3} margin="50% 50px 0 0">
                3415 ms
              </Heading>
            </Fill>
            <Fill>
              <Heading textColor="primary" size={3} margin="50% 0 0 50px">
                1186 ms
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={images.ojcompare}
          maxWidth={window.innerWidth}
          maxHeight={window.innerHeight}
        >
          <Layout>
            <Fill>
              <Heading textColor="primary" size={3} margin="50% 50px 0 0">
                3415 ms
              </Heading>
              <Heading textColor="primary" size={3} margin="50px 50px 0 0">
                55.3K Bytes
              </Heading>
            </Fill>
            <Fill>
              <Heading textColor="primary" size={3} margin="50% 0 0 50px">
                1186 ms
              </Heading>
              <Heading textColor="primary" size={3} margin="50px 0 0  50px">
                899 bytes
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit caps textColor="primary" margin={10}>
            HOW‽
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps>
            Performance
          </Heading>

          <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
            Compile expressio
          </Heading>

          <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
            Variants O(1) branching
          </Heading>

          <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
            Index lookups
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps>
            Filesize
          </Heading>

          <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
            Dead code elmiintation
          </Heading>

          <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
            Pure functions
          </Heading>

          <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
            Linkers/bundlers
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
          <Heading fit caps textColor="tertiary">
            Interop
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.elm} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.purescript} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.coffeeLogo} height="250px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.typescript} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.livescript} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.cljsLogo} height="250px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transition={["slide"]}
          bgColor="primary"
          notes={"bucklescripts FFI"}
        >
          <Heading fit>JS in RE</Heading>
        </Slide>

        <Slide bgImage={images.exPiz} />
        <Slide bgImage={images.exPizLabels} />
        <Slide bgImage={images.addModule} />
        <Slide bgImage={images.addModuleRe} />
        <Slide bgImage={images.reasonablyTyped} />
        <Slide bgImage={images.reasonablyTypedExample} />

        <Slide transition={["slide"]} bgColor="primary" notes={"hark back..."}>
          <Heading fit>RE in JS</Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.p12} />

        <Slide transition={["slide"]} bgImage={images.reinjs1} />

        <Slide transition={["slide"]} bgImage={images.reinjs2} />

        <Slide transition={["slide"]} bgImage={images.reinjs3} />

        <Slide transition={["slide"]}>
          <Image src={images.webpacklogo} width="80%" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit textColor="tertiary">
            bsb -make-world
          </Heading>
          <Heading size={2} textColor="tertiary">
            &&
          </Heading>
          <Heading fit textColor="tertiary">
            yarn webpack
          </Heading>
        </Slide>

        <Slide
          transition={["slide"]}
          bgColor="tertiary"
          notes={"I agree, we already ahve tools etc"}
        >
          <Heading size={6} caps fit textColor="primary" margin={10}>
            Sounds like
          </Heading>
          <Heading size={6} caps fit textColor="primary" margin={10}>
            effort
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.babelLogo} width="90%" />
          <Heading size={4} textColor={"tertiary"}>
            babel-plugin-bucklescript
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.webpacklogo} width="50%" />
          <Heading size={4} textColor={"tertiary"}>
            bs-loader
          </Heading>
        </Slide>

        <Slide bgImage={images.reimport} />

        {
          // poeple design these fantastic systesm
          // amazing idea
          // but interop is maybe the most important
          // BS FFI is really, really good and useable
          // Other JS, the DOM etc
          // raw to bail you out
        }


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
          <Heading fit caps textColor="tertiary" margin={10}>
            Language
          </Heading>
          <Heading fit caps textColor="tertiary">
            features
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
