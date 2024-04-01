const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-12">
      <div className="p-4 shadow-md">
        <h2 className="font-bold text-xl mb-2">Feature 1</h2>
        <p>This is a description of feature 1.</p>
      </div>
      <div className="p-4 shadow-md">
        <h2 className="font-bold text-xl mb-2">Feature 2</h2>
        <p>This is a description of feature 2.</p>
      </div>
      <div className="p-4 shadow-md">
        <h2 className="font-bold text-xl mb-2">Feature 3</h2>
        <p>This is a description of feature 3.</p>
      </div>
    </div>
  )
};

export default Features;
