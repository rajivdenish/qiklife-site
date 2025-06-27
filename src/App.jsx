
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, TrendingUp, Users, BarChart3, Settings, Sparkles, ArrowRight, CheckCircle, Star, Target, Rocket, Brain, Clock, DollarSign, Shield, ChevronRight, Play, Pause, RotateCcw, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const showFeatureToast = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const automationTools = [
    {
      icon: Bot,
      title: "Smart Customer Support",
      description: "AI-powered chatbots that handle 80% of customer inquiries automatically",
      metrics: "↑ 65% faster response time",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Sales Automation",
      description: "Automated lead scoring, follow-ups, and conversion optimization",
      metrics: "↑ 40% conversion rate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Social Media Manager",
      description: "Auto-schedule posts, respond to comments, and analyze engagement",
      metrics: "↑ 200% engagement",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Insights",
      description: "Real-time business intelligence with predictive analytics",
      metrics: "↑ 85% better decisions",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    { icon: Brain, title: "AI-Powered Insights", description: "Smart recommendations based on your business data" },
    { icon: Clock, title: "24/7 Automation", description: "Your business works even when you sleep" },
    { icon: DollarSign, title: "Cost Reduction", description: "Save up to 70% on operational costs" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-level security for your business data" }
  ];

  const stats = [
    { value: "10,000+", label: "Businesses Automated", icon: Target },
    { value: "85%", label: "Average Cost Savings", icon: DollarSign },
    { value: "24/7", label: "Uptime Guarantee", icon: Clock },
    { value: "4.9/5", label: "Customer Rating", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <Helmet>
        <title>AI Business Automation Platform - Supercharge Your Small Business</title>
        <meta name="description" content="Transform your small business with AI-powered automation tools. Boost efficiency, reduce costs, and scale faster with our intelligent business solutions." />
      </Helmet>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AutomateAI
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['dashboard', 'automations', 'analytics', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 capitalize ${
                    activeTab === tab 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/30 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {['dashboard', 'automations', 'analytics', 'settings'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 capitalize ${
                      activeTab === tab 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              {/* Hero Section */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Supercharge Your Business
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Transform your small business with AI-powered automation that works 24/7 to boost efficiency, reduce costs, and accelerate growth
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button 
                    onClick={showFeatureToast}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial <Rocket className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    onClick={showFeatureToast}
                    variant="outline" 
                    className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
                  >
                    Watch Demo <Play className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Automation Tools Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {automationTools.map((tool, index) => (
                  <motion.div
                    key={tool.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                        {tool.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {tool.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 font-semibold text-sm bg-green-400/10 px-3 py-1 rounded-full">
                          {tool.metrics}
                        </span>
                        <Button 
                          onClick={showFeatureToast}
                          variant="ghost" 
                          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-2"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Features Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-purple-500/20"
              >
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Why Choose AutomateAI?
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'automations' && (
            <motion.div
              key="automations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Automation Workflows
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Create, manage, and monitor your automated business processes
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Active Workflows */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                    Active Workflows
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      { name: "Customer Onboarding", status: "Running", processed: "1,247", success: "98.5%" },
                      { name: "Lead Qualification", status: "Running", processed: "856", success: "94.2%" },
                      { name: "Invoice Processing", status: "Paused", processed: "432", success: "99.1%" },
                      { name: "Social Media Posting", status: "Running", processed: "2,103", success: "97.8%" }
                    ].map((workflow, index) => (
                      <motion.div
                        key={workflow.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-white">{workflow.name}</h3>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              workflow.status === 'Running' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {workflow.status}
                            </span>
                            <Button 
                              onClick={showFeatureToast}
                              variant="ghost" 
                              size="sm"
                              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                            >
                              {workflow.status === 'Running' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Processed Today:</span>
                            <div className="text-white font-semibold">{workflow.processed}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Success Rate:</span>
                            <div className="text-green-400 font-semibold">{workflow.success}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Settings className="w-6 h-6 text-purple-400 mr-3" />
                    Quick Actions
                  </h2>
                  
                  <div className="space-y-4">
                    <Button 
                      onClick={showFeatureToast}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-xl text-left justify-start"
                    >
                      <Bot className="w-5 h-5 mr-3" />
                      Create New Workflow
                    </Button>
                    
                    <Button 
                      onClick={showFeatureToast}
                      variant="outline" 
                      className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 p-4 rounded-xl text-left justify-start"
                    >
                      <RotateCcw className="w-5 h-5 mr-3" />
                      Restart All Workflows
                    </Button>
                    
                    <Button 
                      onClick={showFeatureToast}
                      variant="outline" 
                      className="w-full border-orange-500/50 text-orange-300 hover:bg-orange-500/10 p-4 rounded-xl text-left justify-start"
                    >
                      <BarChart3 className="w-5 h-5 mr-3" />
                      View Analytics
                    </Button>
                  </div>

                  {/* Performance Summary */}
                  <div className="mt-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Today's Performance</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Processed</span>
                        <span className="text-white font-semibold">4,638</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Success Rate</span>
                        <span className="text-green-400 font-semibold">97.4%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Time Saved</span>
                        <span className="text-cyan-400 font-semibold">23.5 hrs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Business Analytics
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Real-time insights and predictive analytics for your business
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Revenue Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                    Revenue Growth
                  </h3>
                  <div className="h-64 bg-gradient-to-t from-green-500/20 to-transparent rounded-2xl flex items-end justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">+47%</div>
                      <div className="text-gray-300">vs last month</div>
                    </div>
                  </div>
                </motion.div>

                {/* Customer Satisfaction */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Star className="w-6 h-6 text-yellow-400 mr-3" />
                    Customer Satisfaction
                  </h3>
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-yellow-400 mb-4">4.9</div>
                      <div className="flex justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-gray-300">Average Rating</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Key Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid md:grid-cols-3 gap-6 mb-8"
              >
                {[
                  { title: "Cost Savings", value: "$12,450", change: "+23%", color: "text-green-400" },
                  { title: "Time Saved", value: "156 hrs", change: "+31%", color: "text-cyan-400" },
                  { title: "Efficiency Gain", value: "89%", change: "+12%", color: "text-purple-400" }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <h4 className="text-gray-400 text-sm mb-2">{metric.title}</h4>
                    <div className="flex items-end justify-between">
                      <div className={`text-3xl font-bold ${metric.color}`}>{metric.value}</div>
                      <div className="text-green-400 text-sm font-semibold">{metric.change}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Predictions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Brain className="w-6 h-6 text-purple-400 mr-3" />
                  AI Predictions
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Next Month Revenue</span>
                      <span className="text-green-400 font-semibold">$28,500 (+15%)</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Customer Churn Risk</span>
                      <span className="text-yellow-400 font-semibold">Low (2.3%)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Optimal Staff Level</span>
                      <span className="text-cyan-400 font-semibold">12 employees</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Best Marketing Channel</span>
                      <span className="text-purple-400 font-semibold">Social Media</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Settings & Configuration
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Customize your automation platform to fit your business needs
                </p>
              </div>

              <div className="space-y-8">
                {/* Account Settings */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Users className="w-6 h-6 text-blue-400 mr-3" />
                    Account Settings
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Business Name</label>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-white">
                        Acme Small Business Inc.
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Industry</label>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-white">
                        E-commerce & Retail
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Contact Email</label>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-white">
                        admin@acmebusiness.com
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Plan</label>
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-3 text-purple-300 font-semibold">
                        Pro Plan - $99/month
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      onClick={showFeatureToast}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-xl"
                    >
                      Update Account
                    </Button>
                  </div>
                </motion.div>

                {/* Automation Preferences */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Bot className="w-6 h-6 text-purple-400 mr-3" />
                    Automation Preferences
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { title: "Auto-respond to customer inquiries", enabled: true },
                      { title: "Send weekly performance reports", enabled: true },
                      { title: "Auto-schedule social media posts", enabled: false },
                      { title: "Predictive inventory management", enabled: true },
                      { title: "Automated invoice processing", enabled: false }
                    ].map((setting, index) => (
                      <div key={setting.title} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-gray-300">{setting.title}</span>
                        <Button
                          onClick={showFeatureToast}
                          variant="ghost"
                          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                            setting.enabled 
                              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                              : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                          }`}
                        >
                          {setting.enabled ? 'Enabled' : 'Disabled'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Integrations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                    Connected Integrations
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Shopify", status: "Connected", color: "text-green-400" },
                      { name: "Slack", status: "Connected", color: "text-green-400" },
                      { name: "Google Analytics", status: "Disconnected", color: "text-gray-400" },
                      { name: "Mailchimp", status: "Connected", color: "text-green-400" },
                      { name: "QuickBooks", status: "Disconnected", color: "text-gray-400" },
                      { name: "Stripe", status: "Connected", color: "text-green-400" }
                    ].map((integration, index) => (
                      <div key={integration.name} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-white font-medium">{integration.name}</span>
                        <div className="flex items-center space-x-3">
                          <span className={`text-sm ${integration.color}`}>{integration.status}</span>
                          <Button
                            onClick={showFeatureToast}
                            variant="ghost"
                            size="sm"
                            className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
