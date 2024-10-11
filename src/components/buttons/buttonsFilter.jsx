import "../../styles/components/buttons/buttonsFilter.scss";

const ButtonFilter = ({ menuButtons, filterType, active }) => {
  return (
    <section className="buttonProducts">
      {menuButtons.map((buttonType) => (
        <button
          key={buttonType}
          onClick={() => filterType(buttonType)}
          className={active === buttonType ? "active" : ""}
        >
          {buttonType}
        </button>
      ))}
    </section>
  );
};

export default ButtonFilter;
