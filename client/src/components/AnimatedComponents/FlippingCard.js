import React from "react";

const FrontSide = () => {
  return (
    <div className="card-side front-side">
      <div className="front-side-content">
        <p>
          Vivamus tincidunt est nec tempus ornare. Etiam leo risus, mattis ut
          cursus vel, blandit sed metus. Nunc tortor urna, varius id lacus sit
          amet, sagittis faucibus mauris. Donec viverra ornare ligula, in
          dignissim nisi pellentesque in. Maecenas risus libero, pretium sed
          ornare ac, aliquet quis neque. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Donec porta,
          eros a consectetur finibus, elit odio molestie purus, at iaculis urna
          urna eu lorem.
        </p>
        <p>
          Etiam mollis tortor enim, nec posuere arcu lobortis aliquam. Sed non
          ullamcorper ex. Suspendisse potenti. Aenean eget neque pulvinar,
          bibendum elit vitae, pellentesque lectus. Nullam scelerisque, felis
          vel feugiat rhoncus, purus ex venenatis nibh, at lacinia enim arcu id
          nisi. Nunc accumsan feugiat arcu porta porta. Nam pharetra, urna nec
          scelerisque facilisis, urna nibh mattis ligula, sed pharetra augue
          magna et lectus. Ut a odio efficitur, accumsan lectus at, posuere
          erat. Ut cursus et ex eu hendrerit. Donec nec tellus et diam vulputate
          imperdiet quis nec diam. Aliquam et justo dui.
        </p>
        <p>
          Curabitur suscipit porttitor lectus, sed consectetur nisl mollis a.
          Cras consectetur, nibh sollicitudin pharetra aliquam, arcu libero
          aliquet metus, sit amet rhoncus neque nisl a risus. Etiam a malesuada
          ipsum, vitae rhoncus mi. Suspendisse id gravida odio. Pellentesque
          eget dolor odio. Suspendisse auctor vel elit auctor gravida. Aenean
          convallis mollis lacinia. Mauris sit amet nisi leo. Etiam aliquet
          tincidunt nunc sed rutrum. Etiam mi purus, lobortis nec bibendum id,
          maximus ac lacus. Pellentesque sit amet tortor tristique, dictum
          turpis eget, ultrices sem. Donec libero erat, laoreet at eleifend et,
          mattis et massa. Curabitur laoreet lorem a aliquam venenatis.
          Suspendisse interdum feugiat maximus. Etiam diam turpis, scelerisque
          bibendum imperdiet et, sollicitudin ac lacus. Integer varius velit
          vitae lacus ultrices ultricies. Etiam eu dictum magna. Mauris nec
          euismod nunc. Donec.
        </p>{" "}
      </div>
    </div>
  );
};

const BackSide = () => {
  return (
    <div className="card-side back-side">
      <div className="back-side-contents">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus
          justo ut risus scelerisque, ac pharetra odio lacinia. Ut sed faucibus
          nisl. Ut odio sem, porttitor id pulvinar in, vulputate egestas est.
          Pellentesque laoreet posuere orci non gravida. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Etiam nulla risus, dignissim
          id sem imperdiet, pharetra tincidunt dolor. Suspendisse id semper
          neque. Sed semper varius dignissim. Suspendisse sem tellus, ultricies
          sit amet augue scelerisque, pharetra efficitur elit. Suspendisse at
          massa ligula. Cras nec neque dui. Donec tincidunt, massa rhoncus
          rutrum consectetur, lectus mi dictum erat, nec varius ligula diam a
          lacus.
        </p>
        <p>
          Nullam ut egestas orci. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Etiam blandit nisi
          efficitur, ultricies turpis in, imperdiet sapien. Suspendisse suscipit
          sodales ante eu pulvinar. Sed non felis ante. Ut nec enim eget arcu
          cursus gravida et vitae lectus. Aenean faucibus pellentesque congue.
          Curabitur placerat justo in dolor volutpat, quis hendrerit felis
          ullamcorper. Vestibulum ut laoreet erat. Donec et nunc blandit, mattis
          augue vitae, vestibulum augue. Pellentesque nec condimentum tortor. In
          in venenatis nunc.
        </p>

        <p>
          Vestibulum est eros, volutpat ac dolor non, malesuada laoreet nisl. Ut
          ac ipsum vel augue dictum hendrerit. Ut commodo interdum arcu, eget
          dictum diam. Ut imperdiet arcu quam, vel viverra tortor tincidunt
          vitae. Maecenas luctus metus vel tristique volutpat. Aenean lobortis
          risus in finibus commodo. Vivamus in hendrerit tortor. Aliquam
          molestie justo vel sapien pulvinar, id venenatis est consequat. In
          ultrices porta aliquet. Cras ornare elit ac sapien blandit, id
          efficitur erat ullamcorper. Donec at nulla condimentum, cursus arcu
          et, tempus ipsum. Proin in justo sagittis, pulvinar erat et, feugiat
          eros. Maecenas in pretium lacus, sed iaculis nunc. Praesent fringilla,
          lorem in fermentum hendrerit, enim turpis sodales purus, id venenatis
          dolor sapien eu felis. Curabitur diam felis, sodales lacinia mattis
          et, luctus vel justo.
        </p>
      </div>
    </div>
  );
};

class TwoFacedCard extends React.Component {
  state = {
    showFront: true
  };
  animateCard = () => {
    this.setState({ showFront: !this.state.showFront });
    const card = document.getElementById("flipping-card");
    card.classList.toggle("animate");
  };

  render() {
    const { className } = this.props;
    return (
      <div
        id="flipping-card"
        className={`Two-Faced-Card-Container ${className}`}
      >
        <div className="my-card-body">
          <FrontSide />
          <BackSide />
        </div>
      </div>
    );
  }
}

export default TwoFacedCard;
