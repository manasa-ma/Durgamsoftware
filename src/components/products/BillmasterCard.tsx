import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { BillmasterProduct } from '../../types/product';
import { ProductCard } from './ProductCard';
import { Badge } from '../common/Badge';
import { Button } from '../buttons/Button';
import { PlaceholderBox } from '../common/PlaceholderBox';

export interface BillmasterCardProps {
  product: BillmasterProduct;
}

export const BillmasterCard: React.FC<BillmasterCardProps> = ({ product }) => {
  return (
    <ProductCard featured className="relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="orange">{product.category}</Badge>
          <span className="text-xs font-mono text-slate-400">billmaster OS</span>
        </div>

        <h3 className="text-2xl font-bold text-brand-navy mb-2">
          {product.name}
        </h3>
        
        <p className="text-sm font-semibold text-brand-orange mb-3">
          {product.tagline}
        </p>

        <p className="text-sm text-brand-secondary-text mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Product Visual Mockup Placeholder */}
        <PlaceholderBox
          label={`[${product.name.toUpperCase()}_INTERFACE_PREVIEW]`}
          heightClass="h-44"
          className="mb-6 bg-slate-50"
        />

        {/* Feature List */}
        <div className="space-y-2.5 mb-8">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-brand-secondary-text">
              <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-brand-border">
        <Button variant="primary" to={product.ctaLink} className="w-full gap-2">
          <span>{product.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </ProductCard>
  );
};
