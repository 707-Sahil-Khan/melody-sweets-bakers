import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.updated}>Last updated: 10/03/2026</p>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.intro}>
                        This Privacy Policy explains how Melody Sweets and Bakers ("we", "our", or "us")
                        collects, uses, and protects your personal information when you visit our website
                        or contact us through any of our channels. We are committed to protecting your
                        privacy and handling your data responsibly.
                    </p>
                </div>

                <div className={styles.body}>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Information We Collect</h2>
                        <p>
                            When you interact with us — whether by filling out our contact form, placing
                            an order, or reaching out directly — we may collect personal information such
                            as your name, email address, phone number, and company name. We also collect
                            technical data automatically, including your IP address, browser type, and
                            pages visited on our site, to help us improve your experience.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
                        <p>
                            We use the information you provide to respond to your enquiries, process
                            orders, and provide customer support. We may also use your contact details
                            to send you updates about our products or promotions, but only where you
                            have given us your consent to do so. We do not use your information for
                            any purpose beyond what is necessary to serve you.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Cookies and Tracking</h2>
                        <p>
                            Our website may use cookies — small files stored on your device — to
                            remember your preferences and understand how visitors use our site. You
                            can choose to disable cookies through your browser settings at any time.
                            Please note that disabling cookies may affect some functionality of our
                            website.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Sharing of Information</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties.
                            We may share your data with trusted service providers who assist us in
                            operating our website or conducting our business, provided they agree to
                            keep your information confidential. We may also disclose information where
                            required by law.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Data Security</h2>
                        <p>
                            We take appropriate measures to protect your personal data from unauthorized
                            access, misuse, or disclosure. All form submissions on our website are
                            handled securely. However, no method of transmission over the internet is
                            100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Data Retention</h2>
                        <p>
                            We retain your personal information only for as long as is necessary to
                            fulfill the purposes outlined in this policy, or as required by law. Once
                            your data is no longer needed, we securely delete or anonymize it.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Your Rights</h2>
                        <p>
                            You have the right to access the personal information we hold about you,
                            request corrections, or ask us to delete it. You may also withdraw your
                            consent to marketing communications at any time. To exercise any of these
                            rights, please contact us using the details below.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Children's Privacy</h2>
                        <p>
                            Our website is not directed at children under the age of 13, and we do
                            not knowingly collect personal information from minors. If you believe
                            we have inadvertently collected such information, please contact us and
                            we will delete it promptly.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be
                            posted on this page with an updated date. We encourage you to review this
                            policy periodically to stay informed about how we are protecting your
                            information.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or how we handle your
                            data, please do not hesitate to get in touch:
                        </p>
                        <div className={styles.contactBox}>
                            <p><strong>Melody Sweets and Bakers</strong></p>
                            <p>Phone: <a href="tel:03001590951" className={styles.link}>0300 159 0951</a></p>
                            <p>Email: <a href="mailto:melodysweetsandbakers@gmail.com" className={styles.link}>melodysweetsandbakers@gmail.com</a></p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}