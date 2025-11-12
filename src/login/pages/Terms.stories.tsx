import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "terms.ftl" });

const meta = {
    title: "login/terms.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                "x-keycloakify": {
                    messages: {
                        termsText: "<p>My terms in <strong>English</strong></p>"
                    }
                }
            }}
        />
    )
};

export const LongTerms: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                "x-keycloakify": {
                    messages: {
                        termsText: `
                            <h2>Terms and Conditions of Use</h2>
                            <p><em>Last Updated: November 12, 2025</em></p>
                            
                            <h3>1. Acceptance of Terms</h3>
                            <p>By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                            
                            <h3>2. Use License</h3>
                            <p>Permission is granted to temporarily access the materials (information or software) on our service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                            <ul>
                                <li>Modify or copy the materials;</li>
                                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>Attempt to decompile or reverse engineer any software contained on our service;</li>
                                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>
                            
                            <h3>3. User Account and Security</h3>
                            <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account or password.</p>
                            <p>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
                            
                            <h3>4. Privacy Policy</h3>
                            <p>Your use of our service is also governed by our Privacy Policy. We collect, use, and protect your personal information in accordance with applicable data protection laws, including GDPR where applicable.</p>
                            <p>We will never sell your personal information to third parties without your explicit consent.</p>
                            
                            <h3>5. User Content</h3>
                            <p>Our service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.</p>
                            <p>By posting content to the service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.</p>
                            
                            <h3>6. Prohibited Uses</h3>
                            <p>You may not use our service:</p>
                            <ul>
                                <li>For any unlawful purpose or to solicit others to perform or participate in any unlawful acts;</li>
                                <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;</li>
                                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others;</li>
                                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate;</li>
                                <li>To submit false or misleading information;</li>
                                <li>To upload or transmit viruses or any other type of malicious code;</li>
                                <li>To collect or track the personal information of others;</li>
                                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape;</li>
                                <li>For any obscene or immoral purpose; or</li>
                                <li>To interfere with or circumvent the security features of the service or any related website.</li>
                            </ul>
                            
                            <h3>7. Intellectual Property</h3>
                            <p>The service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors. The service is protected by copyright, trademark, and other laws of both domestic and foreign countries.</p>
                            
                            <h3>8. Disclaimer</h3>
                            <p>The materials on our service are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                            
                            <h3>9. Limitations of Liability</h3>
                            <p>In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our service, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                            
                            <h3>10. Termination</h3>
                            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.</p>
                            
                            <h3>11. Governing Law</h3>
                            <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions.</p>
                            
                            <h3>12. Changes to Terms</h3>
                            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                            
                            <h3>13. Contact Information</h3>
                            <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
                            
                            <p><strong>By clicking "I Accept" below, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</strong></p>
                        `
                    }
                }
            }}
        />
    )
};


export const Arabic: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "ar",
                    rtl: true
                },
                "x-keycloakify": {
                    messages: {
                        termsText: "<p>بلدي الشروط باللغة <strong>العربية</strong></p>"
                    }
                }
            }}
        />
    )
};

export const French: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                "x-keycloakify": {
                    // cSpell: disable
                    messages: {
                        termsText: "<p>Mes terme en <strong>Français</strong></p>"
                    }
                    // cSpell: enable
                }
            }}
        />
    )
};

export const Spanish: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "es"
                },
                "x-keycloakify": {
                    messages: {
                        termsText: "<p>Mis términos en <strong>Español</strong></p>"
                    }
                }
            }}
        />
    )
};


