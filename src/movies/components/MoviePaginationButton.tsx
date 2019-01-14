import React from "react";
import { DefaultButton } from "../../UI/DefaultButton";

const getNextPage = (currentPage: number, buttonText: string) => {
  const pageDifference =
    buttonText.toLowerCase() === "next" ? currentPage + 1 : currentPage - 1;
  if (pageDifference > 0) {
    return pageDifference;
  }
  return 1;
};

class MoviePaginationButton extends React.Component<
  {
    buttonText: string;
    currentPage: number;
    clickHandler: (fn: any) => void;
    canNext?: boolean;
    canPrevious?: boolean;
  },
  {}
> {
  render() {
    return (
      <DefaultButton
        disabled={
          this.props.buttonText.toLowerCase() === "next"
            ? this.props.canNext
            : this.props.canPrevious
        }
        onClick={() =>
          this.props.clickHandler(
            getNextPage(this.props.currentPage, this.props.buttonText)
          )
        }
      >
        {this.props.buttonText}
      </DefaultButton>
    );
  }
}

export default MoviePaginationButton;
