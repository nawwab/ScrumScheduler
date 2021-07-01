function StepCard({cardTitle, children, stepNumber, end}) {
    return (
    <div className="relative mb-4">
      <div className="p-4 flex flex-col justify-center items-center border-2 rounded-lg z-10 bg-gray-50">
      {cardTitle ? (
        <h2 className="text-xl sm:text-2xl font-medium text-center mb-2">
            {`${stepNumber}. ${cardTitle}`}
        </h2>
      ) : null}
        {children}
      </div>
      {end || <span className="absolute h-8 w-1 bg-blue-100 left-1/2 z-0"></span>}
    </div>
    );
}

StepCard.defaultProps = {
  end: false
};

export default StepCard;