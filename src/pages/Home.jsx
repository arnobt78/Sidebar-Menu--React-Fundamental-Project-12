/**
 * Home route (path "/"): intro text and button to open the modal via context.
 * page-content class limits width and stacks content in the center (see index.css).
 */
import { useGlobalContext } from '../context';

const HomePage = () => {
  const { openModal } = useGlobalContext();
  return (
    <main>
      <div className="page-content">
        <h1>Home</h1>
        <p>
          This app demonstrates a sidebar and modal controlled by React Context.
          Use the menu icon to open the sidebar and the button below to open the
          modal.
        </p>
        <button type="button" className="btn" onClick={openModal}>
          show modal
        </button>
      </div>
    </main>
  );
};
export default HomePage;
