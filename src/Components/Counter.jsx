import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div>
            <section className="text-center py-12 bg-base-200 rounded-xl w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4">📊 S-Box Platform Statistics</h2>
      <p className="mb-8">
        Helping users find roommates faster and easier — here's what we've achieved!
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="bg-base-100 p-8 rounded-2xl w-64 text-left shadow-md">
          <img width={50} height={50} src="https://img.icons8.com/ios-filled/100/new-post.png" alt="Posts" />
          <strong className="text-4xl my-2 block">
            <CountUp end={1200} duration={10} />+
          </strong>
          <p>Total Listings</p>
        </div>

        <div className="bg-base-100 p-8 rounded-2xl w-64 text-left shadow-md">
          <img width={50} height={50} src="https://img.icons8.com/ios-filled/100/user-group-man-man.png" alt="Users" />
          <strong className="text-4xl my-2 block">
            <CountUp end={800} duration={10} />+
          </strong>
          <p>Registered Users</p>
        </div>

        <div className="bg-base-100 p-8 rounded-2xl w-64 text-left shadow-md">
          <img width={50} height={50} src="https://img.icons8.com/ios-filled/100/handshake.png" alt="Matches" />
          <strong className="text-4xl my-2 block">
            <CountUp end={500} duration={10} />+
          </strong>
          <p>Roommate Matches</p>
        </div>

        <div className="bg-base-100 p-8 rounded-2xl w-64 text-left shadow-md">
          <img width={50} height={50} src="https://img.icons8.com/ios-filled/100/speech-bubble.png" alt="Reviews" />
          <strong className="text-4xl my-2 block">
            <CountUp end={300} duration={10} />+
          </strong>
          <p>Positive Feedback</p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Counter;