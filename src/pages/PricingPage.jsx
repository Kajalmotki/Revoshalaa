import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Zap, Crown, Shield, ArrowRight } from 'lucide-react';

const plans = [
    {
        id: 'free',
        name: 'Free Trial',
        price: '$0',
        period: 'First session',
        description: 'Try your first live session absolutely free',
        icon: Star,
        color: '#8BA888',
        features: [
            '1 free live session',
            'Access to intro videos',
            'Browse all categories',
            'Chat during live session',
        ],
        buttonText: 'Start Free',
        popular: false,
    },
    {
        id: 'session',
        name: 'Per Session',
        price: '$5',
        period: 'per live session',
        description: 'Pay as you go — attend sessions that interest you',
        icon: Zap,
        color: '#C68B59',
        features: [
            'Access any single live session',
            'Full live interaction (chat, reactions)',
            'Session replay for 48 hours',
            'All intro videos included',
        ],
        buttonText: 'Buy Session',
        popular: false,
    },
    {
        id: 'monthly',
        name: 'Monthly',
        price: '$49',
        period: '/month',
        description: 'Unlimited access to all live sessions',
        icon: Crown,
        color: '#D4A853',
        features: [
            'Unlimited live sessions',
            'All creator categories',
            'Priority chat with instructors',
            'Full replay library access',
            'Exclusive members-only sessions',
            'Cancel anytime',
        ],
        buttonText: 'Subscribe Now',
        popular: true,
    },
];

export default function PricingPage() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showPayment, setShowPayment] = useState(false);
    const navigate = useNavigate();

    const handleSubscribe = (plan) => {
        setSelectedPlan(plan);
        if (plan.id === 'free') {
            navigate('/live-session');
            return;
        }
        // Load Razorpay
        loadRazorpay(plan);
    };

    const loadRazorpay = (plan) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => openRazorpay(plan);
        script.onerror = () => {
            // Fallback: show success modal for demo
            setShowPayment(true);
        };
        document.body.appendChild(script);
    };

    const openRazorpay = (plan) => {
        const amount = plan.id === 'session' ? 500 : 4900; // in cents/paise
        const options = {
            key: 'rzp_test_PLACEHOLDER', // Replace with real key
            amount: amount * 100, // Razorpay expects paise
            currency: 'INR',
            name: 'Revoshalaa',
            description: `${plan.name} — ${plan.description}`,
            image: '',
            handler: function (response) {
                setShowPayment(true);
            },
            prefill: {
                name: '',
                email: '',
                contact: '',
            },
            theme: {
                color: '#8BA888',
            },
        };

        try {
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (e) {
            // Fallback for demo
            setShowPayment(true);
        }
    };

    return (
        <div className="page pricing-page">
            <div className="page-header">
                <h1>Choose Your Path</h1>
                <p className="text-secondary">Start learning from the best.</p>
            </div>

            <div className="page-content">
                {plans.map((plan, i) => {
                    const Icon = plan.icon;
                    return (
                        <div
                            key={plan.id}
                            className={`pricing-card glass-card animate-fade-in-up ${plan.popular ? 'popular' : ''}`}
                            style={{ animationDelay: `${i * 0.12}s` }}
                        >
                            {plan.popular && (
                                <div className="popular-badge">
                                    <Crown size={12} /> BEST VALUE
                                </div>
                            )}

                            <div className="pricing-card-header">
                                <div className="pricing-icon" style={{ background: `${plan.color}18` }}>
                                    <Icon size={24} color={plan.color} />
                                </div>
                                <div>
                                    <h3>{plan.name}</h3>
                                    <p className="pricing-desc">{plan.description}</p>
                                </div>
                            </div>

                            <div className="pricing-price">
                                <span className="price-amount">{plan.price}</span>
                                <span className="price-period">{plan.period}</span>
                            </div>

                            <div className="pricing-features">
                                {plan.features.map((f, fi) => (
                                    <div key={fi} className="pricing-feature">
                                        <Check size={16} color={plan.color} />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={plan.popular ? 'btn-gold' : 'btn-primary'}
                                style={{ width: '100%' }}
                                onClick={() => handleSubscribe(plan)}
                            >
                                {plan.buttonText} <ArrowRight size={16} />
                            </button>
                        </div>
                    );
                })}

                {/* Trust Section */}
                <div className="trust-section">
                    <div className="trust-item">
                        <Shield size={18} color="var(--accent-sage)" />
                        <span>Secure payments via Razorpay</span>
                    </div>
                    <div className="trust-item">
                        <Star size={18} color="var(--accent-gold)" />
                        <span>Cancel subscription anytime</span>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showPayment && (
                <div className="modal-overlay" onClick={() => setShowPayment(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="success-modal">
                            <div className="success-check">
                                <Check size={36} color="white" />
                            </div>
                            <h2>Payment Successful!</h2>
                            <p>You now have access to {selectedPlan?.name} plan.</p>
                            <p className="success-detail">
                                {selectedPlan?.id === 'session'
                                    ? 'Your session pass is now active.'
                                    : 'Your monthly subscription is active.'}
                            </p>
                            <button
                                className="btn-primary"
                                style={{ width: '100%', marginTop: 20 }}
                                onClick={() => { setShowPayment(false); navigate('/schedule'); }}
                            >
                                Start Learning <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        .pricing-page .page-header {
          text-align: center;
        }

        .pricing-page .page-header h1 {
          font-size: 26px;
        }

        .pricing-card {
          padding: 22px;
          margin-bottom: 16px;
          opacity: 0;
          position: relative;
          overflow: hidden;
        }

        .pricing-card.popular {
          border: 2px solid var(--accent-gold);
          background: linear-gradient(135deg, rgba(212,168,83,0.04), rgba(198,139,89,0.04)) !important;
        }

        .popular-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, var(--accent-gold), var(--accent-terracotta));
          border-radius: var(--radius-full);
          color: white;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .pricing-card-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 18px;
        }

        .pricing-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pricing-card-header h3 {
          font-size: 18px;
          font-family: var(--font-display);
          margin-bottom: 2px;
        }

        .pricing-desc {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 18px;
        }

        .price-amount {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .price-period {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 22px;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-secondary);
        }

        /* Trust */
        .trust-section {
          text-align: center;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
        }

        /* Success Modal */
        .success-modal {
          text-align: center;
          padding: 20px 0;
        }

        .success-check {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-sage), var(--accent-sage-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          animation: scaleIn 0.5s ease;
        }

        .success-modal h2 {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .success-modal p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .success-detail {
          margin-top: 6px;
          font-size: 13px !important;
          color: var(--accent-sage) !important;
          font-weight: 500;
        }
      `}</style>
        </div>
    );
}
