export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For startup founders &amp; growth teams
        </div>
        <h1 className="text-4xl font-bold text-white mb-5 leading-tight">
          Get alerts when startup metrics<br />hit danger zones
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect Google Analytics, Mixpanel, and Stripe. Set smart thresholds for churn, growth, and revenue. Get Slack alerts before problems become crises.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start monitoring — $49/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-[#8b949e] text-sm">Integrations</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">&lt;1min</div>
            <div className="text-[#8b949e] text-sm">Alert latency</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-[#8b949e] text-sm">Thresholds</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$49<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead of metric disasters</p>
          <ul className="space-y-3 mb-8">
            {[
              'Google Analytics, Mixpanel & Stripe',
              'Unlimited alert thresholds',
              'Slack & email notifications',
              'Real-time webhook monitoring',
              'Alert history & audit log',
              'Dashboard for threshold management'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which analytics tools are supported?</h3>
            <p className="text-[#8b949e] text-sm">We connect to Google Analytics 4, Mixpanel, and Stripe out of the box. More integrations are on the roadmap based on customer demand.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How fast are the alerts?</h3>
            <p className="text-[#8b949e] text-sm">Alerts are delivered to Slack in under 60 seconds of a threshold breach via real-time webhooks. No more checking dashboards manually.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing portal with no questions asked. Your access continues until the end of the billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Startup Metrics Alert System. All rights reserved.
      </footer>
    </main>
  )
}
