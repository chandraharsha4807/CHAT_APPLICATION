import MdViewer from "./MdViewer";

const ReceiverComponent = ({ answer }: { answer: string }) => {
  return (
    <div className="receiver-message-container">
      <div className="chat-card">
        <div className="chat-tag-answer">Answer</div>
        <MdViewer modelValue={answer} />
      </div>
    </div>
  );
};

export default ReceiverComponent;
