import * as React from 'react';

interface ContactFormEmailProps {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
}

export function ContactFormEmail({
    name,
    company,
    email,
    phone,
    message,
}: ContactFormEmailProps) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ color: '#1e293b', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
                New Contact Form Submission
            </h1>

            <div style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#475569', fontSize: '18px' }}>Contact Details</h2>

                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold', color: '#64748b', width: '120px' }}>
                            Name:
                        </td>
                        <td style={{ padding: '8px', color: '#1e293b' }}>{name}</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f8fafc' }}>
                        <td style={{ padding: '8px', fontWeight: 'bold', color: '#64748b' }}>
                            Company:
                        </td>
                        <td style={{ padding: '8px', color: '#1e293b' }}>{company}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', fontWeight: 'bold', color: '#64748b' }}>
                            Email:
                        </td>
                        <td style={{ padding: '8px', color: '#1e293b' }}>
                            <a href={`mailto:${email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                                {email}
                            </a>
                        </td>
                    </tr>
                    <tr style={{ backgroundColor: '#f8fafc' }}>
                        <td style={{ padding: '8px', fontWeight: 'bold', color: '#64748b' }}>
                            Phone:
                        </td>
                        <td style={{ padding: '8px', color: '#1e293b' }}>{phone}</td>
                    </tr>
                </table>

                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ color: '#475569', fontSize: '18px' }}>Message</h2>
                    <div
                        style={{
                            backgroundColor: '#f8fafc',
                            padding: '15px',
                            borderRadius: '5px',
                            marginTop: '10px',
                            color: '#1e293b',
                            whiteSpace: 'pre-wrap',
                        }}
                    >
                        {message}
                    </div>
                </div>
            </div>

            <div
                style={{
                    marginTop: '30px',
                    paddingTop: '20px',
                    borderTop: '1px solid #e2e8f0',
                    color: '#94a3b8',
                    fontSize: '12px',
                }}
            >
                <p>This email was sent from the Deed Shield contact form at deedshield.joblander.me</p>
            </div>
        </div>
    );
}
