function MainBody() {
  return (
    <main>
      <div className="image">
        <img src="./images/family.jpeg" alt="" />
      </div>

      <section className="contactTiming">
        <div className="timing">
          <p className="message">Think Health. Think Massage.</p>
          <p className="time">
            We are open 9am to 6pm; Monday through Sunday. If you would like to
            schedule an appointment with us, please call us at 987-654-3210
            today!
          </p>
        </div>

        <div className="action-buttons">
          <button>LEARN MORE ABOUT US</button>
          <button>CONTACT US TODAY</button>
        </div>
      </section>

      <section className="detail">
        <p>
          Are you looking for a professional, registered massage therapist?
          Sample Massage Therapy has & registered massage therapists who can
          provide clinical massage.
        </p>

        <p>
          We are committed to your long term health and well-being. Our
          multi-disciplinary clinic provides a balanced approach to a healthy
          lifes Enhance your health and improve your performance with our
          treatments.
        </p>

        <p>
          We welcome you to come explore all the benefits you'll enjoy as one of
          our valued guests. Our professional staff is committed to offering
          best massage therapy in Mainland.
        </p>

        <hr />
      </section>

      <section className="address">
        <p>Family Wellness Message Therapy</p>
        <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
        <p>Phone: 987.654.3210</p>
      </section>
    </main>
  );
}

export default MainBody;
