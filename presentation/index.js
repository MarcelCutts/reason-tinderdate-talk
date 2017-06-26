// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
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
  beerChuck: require("../assets/beerchuck.jpg"),
  elm: require("../assets/elm.png"),
  lair: require("../assets/lair.jpg"),
  number1: require("../assets/number1full.png"),
  number2: require("../assets/number2full.png"),
  deprecated: require("../assets/deprecated.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#333333",
  tertiary: "#db4d3f",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.reasonLogo} width="100%"/>
          <Layout>
            <Fill>
              <Heading size={6} caps textColor="primary" bgColor="tertiary" margin={10} padding={"5px 0"}>
                Marcel Cutts
              </Heading>
            </Fill>
            <Fill>
              <Heading size={6} caps textColor="primary" bgColor="tertiary" margin={10} padding={"5px 0"}>
                @marcelcutts <Image src={images.twitterLogo} height="30px" margin="3px 0 0 0"/>
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
              <Image src={images.flowLogo} height="250px"/>
            </Fill>
            <Fill>
              <Image src={images.babelLogo} height="250px"/>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.eslintLogo} height="250px"/>
            </Fill>
            <Fill>
              <Image src={images.prettierLogo} height="250px"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.reasonLogo} width="100%"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.ocamlLogo} width="100%"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps >Reason is... </Heading>
          <Appear>
            <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}> 📝 New syntax for OCaml</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}> 🌊 Compiler workflow</Heading>
          </Appear>
          <Appear>
            <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}> 🛁 Docs, libs, utils</Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} fit textColor="tertiary">Functional</Heading>
          <Heading size={2} textColor="tertiary" margin={"50px 0 50px 0"}>BUT</Heading>
          <Heading size={3} fit textColor="tertiary">Permissive</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit textColor="primary">Can an old language like </Heading>
          <Heading fit textColor="primary">OCaml</Heading>
          <Heading fit textColor="primary">be relevant to us now?</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.erlang} width="40%"/>
          <Image src={images.elixir} width="40%" margin={"0 0 0 10%"}/>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Image src={images.whatsApp} width="50%"/>
          <Appear>
            <Heading fit caps textColor="primary">$19 billion</Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit textColor="primary">Marcel, you absolute idiot</Heading>
          <Heading fit textColor="primary">OCaml</Heading>
          <Heading fit textColor="primary">{"doesn't run in browsers"}</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.bloombergKeyboard} width="100%"/>
          <Appear>
            <Heading size={2}>Bucklescript</Heading>
          </Appear>
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
            Why should I write JavaScript in a meta language for a 20 year old systems language that is compiled to JavaScript by a fancy keyboard company?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.flowLogo} height="250px"/>
            </Fill>
            <Fill>
              <Image src={images.babelLogo} height="250px"/>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.eslintLogo} height="250px"/>
            </Fill>
            <Fill>
              <Image src={images.prettierLogo} height="250px"/>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.flowLogo} height="100%"/>
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

        <Slide transition={["slide"]} bgImage={images.atomTypes} />

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.babelLogo} width="100%"/>
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

        <Slide transition={["slide"]} bgImage={images.number1} className="compiled" />

        <Slide transition={["slide"]} bgImage={images.number2} className="compiled" />

        <Slide transition={["slide"]} bgColor="secondary">
          <Image src={images.seanGrove} height="50%"/>
          <Heading fit caps textColor="primary">@sgrove</Heading>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.prettierLogo} height="100%"/>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.refmt} />

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.eslintLogo} height="400px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" margin={"-120px 0 0 -70px"}>
          <Image src={images.betterErrors} height="900px" margin/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary">
            Tames the
          </Heading>
          <Heading fit caps textColor="tertiary">
            meta-language
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.deprecated} className="dep" />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps textColor="tertiary">
            Amazing
          </Heading>
          <Heading fit caps textColor="tertiary">
            Interop
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.reasonReactLogo} width="40%"/>
          <Heading size={6} fit caps textColor="tertiary" margin={10}>
            Reason-React
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fit caps textColor="tertiary">
            React Native?
          </Heading>
          <Heading fit caps textColor="primary" bgColor="tertiary" margin={"60px 0"}>
            bs-react-native
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            By @wokalski & @s_timme
          </Heading>
        </Slide>

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
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              💻 OCaml home turf
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              💻 Compile to system
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"}caps textColor="secondary" margin={10}>
              💻 Interact with UI libs etc
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary" margin={10}>
              Mobile
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              📱 Compile to ARM
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              📱 Interop with ObjC libs etc
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary" margin={10}>
              Mobile
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              📱 Compile to ARM
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              📱 Interop with ObjC libs etc
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              📱 Rad performance well suited
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="tertiary" margin={10}>
              Embedded
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              🖲 Compile to ARM
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              🖲 Interop with... whatever
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              🖲 Rad performance well suited
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
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              {"⚡️ <50ms boot time for VM"}
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              {"⚡️ 100KB - 10MB in size"}
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              ⚡️ 1000 - 1000 instances on 1 machine
          </Heading>
          <Heading size={5} textAlign="left" margin={"30px 0 0 50px"} caps textColor="secondary" margin={10}>
              ⚡️ Check each VM into Git!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.lair} />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            👶 Very immature
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🌲 Small ecosystem
          </Heading>
          <Heading size={3} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            👩‍👩‍👧‍👧 New community
          </Heading>
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
              <Heading size={6} caps textColor="primary" bgColor="tertiary" margin={10} padding={"5px 0"}>
                Marcel Cutts
              </Heading>
            </Fill>
            <Fill>
              <Heading size={6} caps textColor="primary" bgColor="tertiary" margin={10} padding={"5px 0"}>
                @marcelcutts <Image src={images.twitterLogo} height="30px" margin="3px 0 0 0"/>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
