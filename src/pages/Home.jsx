import { useGlobalContext } from '../context';

const HomePage = () => {
  const { openModal } = useGlobalContext();
  return (
    <main>
      <p>
        This app demonstrates a sidebar and modal controlled by React Context.
        Use the menu icon to open the sidebar and the button below to open the
        modal.
      </p>
      <button type="button" className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};
export default HomePage;
