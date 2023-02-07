import { useModal, Spacer, Card, Col, Row, Button, Text, Modal } from "@nextui-org/react";

// const { setVisible, bindings } = useModal();

// type useModal = (initialVisible: boolean) => {
//   visible: boolean;
//   setVisible: Dispatch<SetStateAction<boolean>>;
//   currentRef: MutableRefObject<boolean>;
//   bindings: {
//     open: boolean;
//     onClose: () => void;
//   };
// };

//const [visible, setVisible] = useState(false);
const { setVisible, bindings } = useModal();

const handler = () => setVisible(true);

const closeHandler = () => {
  setVisible(false);
  console.log("closed");
};

export const Card5 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Your day your way
        </Text>
        <Text h3 color="white">
          Your checklist for better sleep
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://nextui.org/images/card-example-5.jpeg"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="https://nextui.org/images/breathing-app-icon.jpeg"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />

              <Text color="#d1d1d1" size={12}>
                Breathing App
              </Text>
              <Text color="#d1d1d1" size={12}>
                Get a good night's sleep.
              </Text>
            </Col>
            <Col span={3}>
            <Button size="xs">Invest</Button>
            </Col>
            <Spacer y={0.5} />
            <Col span={3}>
              //
              // Comments 
              //
            <Button size="xs">Portfolio Terms</Button>
            <Modal         
                        closeButton
                        aria-labelledby="modal-title"
                        open={visible}
                        onClose={closeHandler}
              >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  Modal with a lot of content
                </Text>
              </Modal.Header>
                <Modal.Body>
                      <Text id="modal-description">
                        Risk Disclosure: Trading in financial instruments and/or cryptocurrencies involves high risks including the risk of losing some, or all, of your investment amount, and may not be suitable for all investors. Prices of financial instruments and/or cryptocurrencies may go up as well as down. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Trading in financial instruments and/or cryptocurrencies may not be suitable for all investors, and is only intended for people over 18. Please ensure that you fully understand the risks involved, taking into account your investments objectives and level of experience, before trading, and if necessary seek independent advice. You should be aware of all the risks associated with trading, and seek advice from an independent financial advisor if you have any doubts. Past performance of financial instruments and/or cryptocurrencies is not necessarily indicative of future results. Any opinions, news, research, analyses, prices or other information contained on this website is provided as general market commentary and does not constitute investment advice. NextUI.org will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information. Please read our full Risk Disclosure.
                      </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={() => setVisible(false)}>
                      Close
                    </Button>
                    <Button auto onClick={() => setVisible(false)}>
                      Agree
                    </Button>
                  </Modal.Footer>
              </Modal>
            </Col>
            <Spacer y={0.5} />
            <Col span={3}>
            <Button size="xs">Portfolio</Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Get App
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

